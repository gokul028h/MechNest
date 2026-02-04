import express from "express";
import Contact from "../models/Contact.js";
import { sendMail } from "../utils/mailer.js";

const router = express.Router();

// POST /api/contact - Create new contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required"
      });
    }

    // Save to database
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Try sending email
    try {
      await sendMail({
        subject: "📩 New Contact Form Submission",
        text: `
New Contact Message:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
        `
      });
    } catch (mailError) {
      console.error("⚠️ Email failed (contact):", mailError.message);
      // Do not fail the request
    }

    res.status(201).json({ 
      success: true, 
      message: "Message received successfully" 
    });

  } catch (error) {
    console.error("❌ Error saving contact message:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message
    });
  }
});

export default router;
