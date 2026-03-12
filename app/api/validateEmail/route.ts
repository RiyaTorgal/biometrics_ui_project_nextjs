// app/api/validateEmail/route.ts
import { NextRequest, NextResponse } from "next/server";
import { promises as dns } from "dns";

// ─── Disposable domain blocklist ──────────────────────────────────────────────
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "tempmail.com", "throwam.com",
  "yopmail.com", "sharklasers.com", "guerrillamailblock.com", "grr.la",
  "guerrillamail.info", "guerrillamail.biz", "guerrillamail.de",
  "guerrillamail.net", "guerrillamail.org", "spam4.me", "trashmail.com",
  "trashmail.me", "trashmail.at", "dispostable.com", "maildrop.cc",
  "fakeinbox.com", "spamgourmet.com", "mailnull.com", "10minutemail.com",
  "10minutemail.net", "tempr.email", "discard.email", "spamex.com",
  "mytemp.email", "temp-mail.org", "tempinbox.com", "throwaway.email",
  "wegwerfmail.de", "owlpic.com", "getnada.com",
]);

// ─── Known legitimate domains (skip MX lookup for these) ─────────────────────
const KNOWN_GOOD_DOMAINS = new Set([
  "gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com",
  "protonmail.com", "proton.me", "me.com", "mac.com", "live.com",
  "msn.com", "googlemail.com", "ymail.com", "aol.com", "zoho.com",
]);

// ─── Gibberish domain patterns (fallback when DNS is unavailable) ─────────────
// Catches domains like abc.com, xyz.com, test.com, foo.bar etc.
const GIBBERISH_DOMAIN_PATTERNS = [
  /^[^aeiou]{2,}\.[a-z]{2,}$/i,          // no vowels in domain name: xyz.com, abc.com
  /^(.)\1{2,}\.[a-z]{2,}$/i,             // repeated chars: aaa.com, zzz.net
  /^(foo|bar|baz|qux|test|fake|dummy|example|sample|blah|asdf|xyz|abc|def|ghi|jkl|mno|pqr|stu|vwx)\.[a-z]{2,}$/i,
];

// ─── In-memory cache ──────────────────────────────────────────────────────────
const cache = new Map<string, { valid: boolean; reason?: string }>();

// ─── MX lookup ────────────────────────────────────────────────────────────────
async function checkMxRecords(domain: string): Promise<"found" | "notfound" | "unknown"> {
  try {
    const records = await dns.resolveMx(domain);
    return records && records.length > 0 ? "found" : "notfound";
  } catch (err: unknown) {
    const code = (err as NodeJS.ErrnoException).code;
    if (code === "ENODATA" || code === "ENOTFOUND" || code === "ESERVFAIL") {
      return "notfound";
    }
    // ECONNREFUSED, ETIMEOUT = DNS server unreachable
    return "unknown";
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");

  if (!email) {
    return NextResponse.json({ valid: false, reason: "No email provided." }, { status: 400 });
  }

  const normalized = email.trim().toLowerCase();

  if (cache.has(normalized)) {
    return NextResponse.json(cache.get(normalized));
  }

  // ── 1. Format check ──────────────────────────────────────────────────────
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(normalized)) {
    const result = { valid: false, reason: "Please use a valid email address." };
    cache.set(normalized, result);
    return NextResponse.json(result);
  }

  const [local, domain] = normalized.split("@");

  // ── 2. Disposable domain check ───────────────────────────────────────────
  if (DISPOSABLE_DOMAINS.has(domain)) {
    const result = { valid: false, reason: "Temporary emails are not allowed." };
    cache.set(normalized, result);
    return NextResponse.json(result);
  }

  // ── 3. Fake local part check ─────────────────────────────────────────────
  const fakeLocalPatterns = [
    /^(test|fake|asdf|qwerty|noreply|no-reply|donotreply|spam|trash|throwaway|temp)\d*$/i,
    /^(.)\1{4,}$/,
    /^\d+$/,
  ];
  for (const pattern of fakeLocalPatterns) {
    if (pattern.test(local)) {
      const result = { valid: false, reason: "Please use a real email address." };
      cache.set(normalized, result);
      return NextResponse.json(result);
    }
  }

  // ── 4. Skip MX lookup for known good domains ─────────────────────────────
  if (KNOWN_GOOD_DOMAINS.has(domain)) {
    const result = { valid: true };
    cache.set(normalized, result);
    return NextResponse.json(result);
  }

  // ── 5. Gibberish domain pattern check (always runs, DNS-independent) ─────
  for (const pattern of GIBBERISH_DOMAIN_PATTERNS) {
    if (pattern.test(domain)) {
      const result = { valid: false, reason: "This email domain doesn't look real. Please use a valid email address." };
      cache.set(normalized, result);
      return NextResponse.json(result);
    }
  }

  // ── 6. MX record lookup ──────────────────────────────────────────────────
  const mxStatus = await checkMxRecords(domain);

  if (mxStatus === "notfound") {
    const result = { valid: false, reason: "This email domain doesn't exist or can't receive emails." };
    cache.set(normalized, result);
    return NextResponse.json(result);
  }

  if (mxStatus === "unknown") {
    // DNS unreachable — log and fail open
    console.warn(`[validateEmail] DNS lookup failed for domain: ${domain} — failing open`);
    return NextResponse.json({ valid: true });
  }

  // ── 7. All checks passed ─────────────────────────────────────────────────
  const result = { valid: true };
  cache.set(normalized, result);
  return NextResponse.json(result);
}