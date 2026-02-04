import nodemailer from "nodemailer";

export const sendMail = async ({ subject, text }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject,
    text
  };

  await transporter.sendMail(mailOptions);
};