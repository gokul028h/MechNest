import express from "express";
import Demo from "../models/Demo.js";
import { sendMail } from "../utils/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, date, message } = req.body;

    if (!name || !email || !phone || !date || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "All fields are required" 
      });
    }

    const demoRequest = new Demo({
      name,
      email,
      phone,
      date: new Date(date),
      message
    });

    await demoRequest.save();

    try {
      await sendMail({
        subject: "🚀 New Demo Request",
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Message: ${message}
        `
      });
    } catch (err) {
      console.error("Email failed:", err.message);
    }

    res.status(201).json({
      success: true,
      message: "Demo request submitted successfully!",
      data: demoRequest
    });

  } catch (error) {
    console.error("Error saving demo request:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message
    });
  }
});

export default router;
