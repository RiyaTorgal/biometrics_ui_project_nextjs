// app/api/workshopEmail/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import WorkshopEmail from "@/app/components/emails/WorkshopEmail";

export const dynamic = "force-dynamic";

// ─── Server-side validation helpers ──────────────────────────────────────────

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "tempmail.com", "yopmail.com",
  "sharklasers.com", "spam4.me", "trashmail.com", "trashmail.me",
  "dispostable.com", "maildrop.cc", "fakeinbox.com", "10minutemail.com",
  "tempr.email", "discard.email", "mytemp.email", "temp-mail.org",
  "throwaway.email", "getnada.com", "nada.email", "mailnesia.com", "spamgourmet.com",
]);

const FAKE_NAME_PATTERNS = [
  /^(.)\1{2,}$/i,
  /^[^aeiou]{5,}$/i,
  /^(test|fake|asdf|qwerty|admin|user|anon|anonymous|nobody|noone|noreply|abc|xyz)$/i,
  /^[a-z]{1,2}$/i,
  /\d{3,}/,
];

function isNameValid(name: string): boolean {
  const t = name.trim();
  if (!t || t.length < 2 || t.length > 80) return false;
  if (!/^[\p{L}\p{M}'\- ]+$/u.test(t)) return false;
  return !FAKE_NAME_PATTERNS.some((p) => p.test(t));
}

function isEmailFormatValid(email: string): boolean {
  const t = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t)) return false;
  const domain = t.split("@")[1];
  if (DISPOSABLE_DOMAINS.has(domain)) return false;
  const local = t.split("@")[0];
  return !/^(test|fake|noreply|no-reply|donotreply|spam|trash|throwaway|temp)\d*$/i.test(local);
}

function isInstituteNameValid(name: string): boolean {
  const t = name.trim();
  // Must be between 3 and 120 chars, allow letters, numbers, spaces, common punctuation
  if (!t || t.length < 3 || t.length > 120) return false;
  return /^[\p{L}\p{M}0-9'\-\.,& ]+$/u.test(t);
}

function isPhoneValid(phone: string): boolean {
  // Accept formats like +91 98765 43210, 9876543210, +1-800-555-0100, etc.
  const stripped = phone.replace(/[\s\-().+]/g, "");
  return /^\d{7,15}$/.test(stripped);
}

// ─── Reuse /api/validateEmail for the Abstract API check ─────────────────────

async function verifyEmailViaRoute(email: string): Promise<{ valid: boolean; reason?: string }> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const res = await fetch(
      `${baseUrl}/api/validateEmail?email=${encodeURIComponent(email)}`,
      { cache: "no-store" }
    );
    if (!res.ok) return { valid: true };
    return res.json();
  } catch {
    return { valid: true };
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      contactName,
      email,
      instituteName,
      designation,
      phone,
      workshopTitle,
      workshopId,
      estimatedParticipants,
      message,
    } = body;

    // ── Server-side field validation ─────────────────────────────────────────

    if (!isNameValid(contactName))
      return NextResponse.json({ success: false, error: "Invalid contact name." }, { status: 400 });

    if (!isEmailFormatValid(email))
      return NextResponse.json({ success: false, error: "Invalid email address." }, { status: 400 });

    if (!isInstituteNameValid(instituteName))
      return NextResponse.json({ success: false, error: "Invalid institute name." }, { status: 400 });

    if (!designation?.trim() || designation.trim().length < 2)
      return NextResponse.json({ success: false, error: "Designation is required." }, { status: 400 });

    if (!isPhoneValid(phone))
      return NextResponse.json({ success: false, error: "Invalid phone number." }, { status: 400 });

    if (!workshopTitle?.trim())
      return NextResponse.json({ success: false, error: "Workshop title is missing." }, { status: 400 });

    if (!estimatedParticipants?.trim())
      return NextResponse.json({ success: false, error: "Please provide estimated participants." }, { status: 400 });

    if (!message?.trim() || message.trim().length < 10)
      return NextResponse.json({ success: false, error: "Message too short (min 10 characters)." }, { status: 400 });

    // ── Abstract API deep verification ───────────────────────────────────────
    const { valid, reason } = await verifyEmailViaRoute(email);
    if (!valid)
      return NextResponse.json(
        { success: false, error: reason ?? "Email address failed verification." },
        { status: 400 }
      );

    // ── Send via Resend ──────────────────────────────────────────────────────
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from:    process.env.OWNER_EMAIL_FROM!,
      to:      process.env.EMAIL_TO!,
      replyTo: email,
      subject: `[Workshop Enquiry] ${workshopTitle} — ${instituteName}`,
      react:   WorkshopEmail({
        contactName,
        email,
        instituteName,
        designation,
        phone,
        workshopTitle,
        workshopId,
        estimatedParticipants,
        message,
      }),
    });

    if (error) {
      console.error("[workshopEmail] Resend error:", error);
      return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("[workshopEmail] Unexpected error:", err);
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}