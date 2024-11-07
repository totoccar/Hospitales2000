// app/api/modify-appointment/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ModifyEmail } from "../../appointment/modify/ui/ModifyEmail";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, doctor, fecha } = body;

  if (!doctor || !email || !fecha) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.H2000_API);

  try {
    const { data, error } = await resend.emails.send({
      from: `Hospitales 2000 <h2000_informacion@hospitales2000.tech>`,
      to: email,
      subject: "Tu cita ha sido modificada - Mira los detalles",
      react: ModifyEmail({ email, doctor, fecha }),
    });

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
