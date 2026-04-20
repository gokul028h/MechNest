import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async ({ subject, text }) => {
  try {
    await resend.emails.send({
      from: "noreply@mechnestsolutions.com",
      to: ["chandru.mechnestsolutions@gmail.com"],
      subject,
      text,
    });
  } catch (error) {
    console.error("Resend error:", error);
    throw error;
  }
};
