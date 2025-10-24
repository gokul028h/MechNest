import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import demoRoutes from "./routes/demoRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  credentials: true
}));

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "MechNest API is running!" });
});

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/demo", demoRoutes);

// MongoDB Connection
const MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mechNestDB";

mongoose.connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected to mechNestDB"))
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
