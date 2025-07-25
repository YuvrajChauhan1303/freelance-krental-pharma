import nodemailer from "nodemailer";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function sendEmail(data: ContactForm) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT!),
    secure: false,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  const mailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER!,
    subject: `New Contact Message from ${data.name}`,
    html: `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
