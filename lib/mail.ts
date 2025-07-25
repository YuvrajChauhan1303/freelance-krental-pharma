import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendMail = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const mailOptions = {
    from: `"${data.name}" <${data.email}>`,
    to: process.env.TO_EMAIL,
    subject: "New Contact Form Submission",
    text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`,
    html: `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
};
