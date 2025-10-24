import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import demoRoutes from "./routes/demoRoutes.js"; // Add this import

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "*", // temporarily allow all for testing
}));

app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/demo", demoRoutes); // Add this line

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/mechNestDB")
  .then(() => console.log("✅ MongoDB Connected to mechNestDB"))
  .catch((err) => console.log("❌ DB Error:", err));

// Optional: Get database connection info
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("✅ Connected to MongoDB database:", db.name);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));