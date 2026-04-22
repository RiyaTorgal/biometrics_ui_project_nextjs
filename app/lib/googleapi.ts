import { google } from "googleapis";

const SHEET_ID = process.env.GOOGLE_SHEET_ID!;

function getAuth() {
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

async function appendRow(sheetName: string, values: string[]) {
  const sheets = google.sheets({ version: "v4", auth: getAuth() });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${sheetName}!A:Z`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [values] },
  });
}

// ─── Lectures tab ────────────────────────────────────────────
// Columns: Date | Name | Email | Event | Timestamp | Paid/Unpaid
export async function appendLectureRegistration(opts: {
  name: string;
  email: string;
  lectureTitle: string;
  selectedSlot: string;
  transactionRef: string;
}) {
  const now = new Date();
  await appendRow("Lectures", [
    now.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" }), // Date
    opts.name,                                                       // Name
    opts.email,                                                      // Email
    opts.lectureTitle,                                               // Event
    now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),      // Timestamp
    "Unpaid",                                                        // Paid/Unpaid — default
  ]);
}

// ─── Workshops tab ───────────────────────────────────────────
// Columns: Date | Name | Email | Phone No | Institute | City | Event | Participants | Message | Timestamp | Paid/Unpaid
export async function appendWorkshopRegistration(opts: {
  name: string;
  email: string;
  phone?: string;
  institute?: string;
  city?: string;
  workshopTitle: string;
  participants?: string;
  message?: string;
}) {
  const now = new Date();
  await appendRow("Workshops", [
    now.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" }), // Date
    opts.name,                                                       // Name
    opts.email,                                                      // Email
    opts.phone ?? "",                                                // Phone No
    opts.institute ?? "",                                            // Institute
    opts.city ?? "",                                                 // City
    opts.workshopTitle,                                              // Event
    opts.participants ?? "",                                         // Participants
    opts.message ?? "",                                              // Message
    now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),      // Timestamp
    "Unpaid",                                                        // Paid/Unpaid — default
  ]);
}

// ─── Consultations tab ───────────────────────────────────────
// Columns: Date | Name | Email | Event | Timestamp | Slot booked | Transaction Ref | Paid/Unpaid
export async function appendConsultationRegistration(opts: {
  name: string;
  email: string;
  serviceTitle: string;
  selectedSlot: string;
  transactionRef: string;
}) {
  const now = new Date();
  await appendRow("Consultations", [
    now.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" }), // Date
    opts.name,                                                       // Name
    opts.email,                                                      // Email
    opts.serviceTitle,                                               // Event
    now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),      // Timestamp
    opts.selectedSlot,                                               // Slot booked
    opts.transactionRef,                                             // Transaction Ref
    "Unpaid",                                                        // Paid/Unpaid — default
  ]);
}