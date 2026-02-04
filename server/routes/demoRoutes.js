import express from "express";
import Demo from "../models/Demo.js";

const router = express.Router();

// POST /api/demo - Create new demo request
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, date, message } = req.body;

    // Validation
    if (!name || !email || !phone || !date || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "All fields are required" 
      });
    }

    // Create new demo request
    const demoRequest = new Demo({
      name,
      email,
      phone,
      date: new Date(date),
      message
    });

    // Save to database
    await demoRequest.save();

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

// GET /api/demo - Get all demo requests (optional, for admin)
router.get("/", async (req, res) => {
  try {
    const demoRequests = await Demo.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: demoRequests
    });
  } catch (error) {
    console.error("Error fetching demo requests:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch demo requests"
    });
  }
});

export default router;