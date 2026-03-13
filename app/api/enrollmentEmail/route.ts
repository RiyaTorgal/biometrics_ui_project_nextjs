import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, courseName } = body;

    if (!name || !email || !courseName) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email to YOU (admin notification)
    await resend.emails.send({
      from: "Sukshmadarshini <contact@resend.dev>",
      to: ["yourgmail@gmail.com"],
      replyTo: email,

      subject: `New Enrollment: ${courseName}`,

      html: `
        <h2>New Enrollment Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Course:</strong> ${courseName}</p>
      `,
    });

    // Email to USER (confirmation)
    await resend.emails.send({
      from: "Sukshmadarshini <contact@resend.dev>",
      to: [email],

      replyTo: "yourgmail@gmail.com",

      subject: `Enrollment Confirmation – ${courseName}`,

      html: `
        <h2>Enrollment Confirmation</h2>

        <p>Hello ${name},</p>

        <p>
        You will receive the confirmation email for the 
        <strong>${courseName}</strong> shortly.
        </p>

        <p>
        Please follow the instructions provided in the email
        to confirm your seat.
        </p>

        <br/>

        <p>
        Regards,<br/>
        Sukshmadarshini Learning
        </p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}