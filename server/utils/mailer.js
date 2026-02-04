import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async ({ subject, text }) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["gokulleo1030@gmail.com"], // owner
    subject: 'New enrollment to MechNest ',
    text,
  });
};
