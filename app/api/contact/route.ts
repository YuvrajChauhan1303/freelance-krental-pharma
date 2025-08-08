import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      ...mailOptions,
      subject: "New Contact Form Submission",
      html: `
        <h3>Contact Form Details</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}
