import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail", // or any SMTP service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_RECEIVER,
  subject: "New Contact Form Submission",
};
