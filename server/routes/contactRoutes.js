import express from "express";
import Contact from "../models/Contact.js";
import { sendMail } from "../utils/mailer.js";


const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    try {
  await sendMail({
    subject: "📩 New Contact Form Submission",
    text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
    `
  });
} catch (err) {
  console.error("Email failed:", err.message);
}
    res.status(201).json({ success: true, message: "Message received successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
export default router;
