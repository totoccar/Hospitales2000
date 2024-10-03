import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { RecoveryEmail } from "../../recover/ui/RecoveryEmail";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { message, email } = body;

  if (!message || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.H2000_API);

  try {
    const { data, error } = await resend.emails.send({
      from: `Hospitales 2000 <recover_password@hospitales2000.tech>`,
      to: email,
      subject: "Recuperá tu cuenta y seguí con nosotros :)", 
      react: RecoveryEmail({ email, message}), 
    });

    console.log("Email sent:", data);

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}