// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// interface ContactFormBody {
//   firstName: string;
//   lastName: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// export async function POST(req: Request): Promise<Response> {
//   try {
//     const body: ContactFormBody = await req.json();

//     const { firstName, lastName, email, subject, message } = body;

//     const name = `${firstName} ${lastName}`;

//     const result = await resend.emails.send({
//   from: "Contact Form <onboarding@resend.dev>",
//   to: "sukshmadarshini@gmail.com",
//   replyTo: email,
//   subject: subject,
//   html: `
//   <div style="
//     font-family: Arial, sans-serif;
//     background-color: #f4f6f8;
//     padding: 20px;
//   ">
//     <div style="
//       max-width: 600px;
//       margin: auto;
//       background: #ffffff;
//       border-radius: 10px;
//       overflow: hidden;
//       box-shadow: 0 4px 12px rgba(0,0,0,0.08);
//     ">

//       <!-- Header -->
//       <div style="
//         background: #2563eb;
//         color: white;
//         padding: 20px;
//         text-align: center;
//       ">
//         <h2 style="margin: 0;">📩 New Contact Form Submission</h2>
//       </div>

//       <!-- Body -->
//       <div style="padding: 25px; color: #333;">
        
//         <p style="margin-bottom: 20px;">
//           You have received a new message from your website contact form.
//         </p>

//         <table style="width: 100%; border-collapse: collapse;">
//           <tr>
//             <td style="
//               padding: 10px;
//               font-weight: bold;
//               background: #f9fafb;
//               width: 120px;
//               border-radius: 6px 0 0 6px;
//             ">
//               Name
//             </td>
//             <td style="
//               padding: 10px;
//               background: #f9fafb;
//               border-radius: 0 6px 6px 0;
//             ">
//               ${name}
//             </td>
//           </tr>

//           <tr>
//             <td style="padding: 10px; font-weight: bold;">
//               Email
//             </td>
//             <td style="padding: 10px;">
//               ${email}
//             </td>
//           </tr>

//           <tr>
//             <td style="padding: 10px; font-weight: bold;">
//               Subject
//             </td>
//             <td style="padding: 10px;">
//               ${subject}
//             </td>
//           </tr>
//         </table>

//         <!-- Message Box -->
//         <div style="margin-top: 20px;">
//           <p style="font-weight: bold; margin-bottom: 8px;">
//             Message:
//           </p>
//           <div style="
//             background: #f1f5f9;
//             padding: 15px;
//             border-radius: 8px;
//             line-height: 1.6;
//             white-space: pre-line;
//           ">
//             ${message}
//           </div>
//         </div>

//       </div>

//       <!-- Footer -->
//       <div style="
//         background: #f9fafb;
//         padding: 15px;
//         text-align: center;
//         font-size: 12px;
//         color: #6b7280;
//       ">
//         This email was sent from your website contact form.
//       </div>

//     </div>
//   </div>
//   `,
// });

//     console.log("Resend result:", result);

//     if (result.error) {
//       throw new Error(result.error.message);
//     }

//     return Response.json({ success: true });
//   } catch (error: unknown) {
//     console.error(error);

//     return Response.json(
//       { success: false, error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// interface ContactFormBody {
//   firstName: string;
//   lastName: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// export async function POST(req: Request): Promise<Response> {
//   try {
//     const body: ContactFormBody = await req.json();

//     const { firstName, lastName, email, subject, message } = body;

//     const name = `${firstName} ${lastName}`;

//     const result = await resend.emails.send({
//       from: "Contact Form <onboarding@resend.dev>",
//       to: "sukshmadarshini@gmail.com",
//       replyTo: email,
//       subject: subject,
//       html: `
//       <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f6f8; padding: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//         <tr>
//           <td align="center">
//             <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">

//               <!-- Header -->
//               <tr>
//                 <td style="background-color: #2563eb; padding: 24px; text-align: center;">
//                   <h2 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: bold;">
//                     &#9993; New Contact Form Submission
//                   </h2>
//                 </td>
//               </tr>

//               <!-- Body -->
//               <tr>
//                 <td style="padding: 25px; color: #333333;">
//                   <p style="margin: 0 0 20px 0; font-size: 14px;">
//                     You have received a new message from your website contact form.
//                   </p>

//                   <!-- Details Table -->
//                   <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 14px;">
//                     <tr>
//                       <td style="padding: 10px 12px; font-weight: bold; background-color: #f9fafb; width: 120px; border-bottom: 1px solid #e2e8f0;">Name</td>
//                       <td style="padding: 10px 12px; background-color: #f9fafb; border-bottom: 1px solid #e2e8f0;">${name}</td>
//                     </tr>
//                     <tr>
//                       <td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Email</td>
//                       <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0;">${email}</td>
//                     </tr>
//                     <tr>
//                       <td style="padding: 10px 12px; font-weight: bold;">Subject</td>
//                       <td style="padding: 10px 12px;">${subject}</td>
//                     </tr>
//                   </table>

//                   <!-- Message Box -->
//                   <p style="font-weight: bold; margin: 20px 0 8px 0; font-size: 14px;">Message:</p>
//                   <table width="100%" cellpadding="0" cellspacing="0">
//                     <tr>
//                       <td style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #333333;">
//                         ${message}
//                       </td>
//                     </tr>
//                   </table>
//                 </td>
//               </tr>

//               <!-- Footer -->
//               <tr>
//                 <td style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e2e8f0;">
//                   This email was sent from your website contact form.
//                 </td>
//               </tr>

//             </table>
//           </td>
//         </tr>
//       </table>
//       `,
//     });

//     console.log("Resend result:", result);

//     if (result.error) {
//       throw new Error(result.error.message);
//     }

//     return Response.json({ success: true });
//   } catch (error: unknown) {
//     console.error(error);

//     return Response.json(
//       { success: false, error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactEmail from "@/app/components/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormBody {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: ContactFormBody = await req.json();

    const { firstName, lastName, email, subject, message } = body;

    const name = `${firstName} ${lastName}`;

    const html = await render(
      <ContactEmail name={name} email={email} subject={subject} message={message} />
    );

    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sukshmadarshini@gmail.com",
      replyTo: email,
      subject: subject,
      html,
    });

    console.log("Resend result:", result);

    if (result.error) {
      throw new Error(result.error.message);
    }

    return Response.json({ success: true });
  } catch (error: unknown) {
    console.error(error);

    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}