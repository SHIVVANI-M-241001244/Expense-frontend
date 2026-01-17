import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Routes
import expenseroutes from "./routes/expenseroutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

// Connect DB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug log (keep for now)
console.log("About to load auth routes");

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseroutes);

// Test route (optional but helpful)
app.get("/", (req, res) => {
  res.send("Expense Tracker API is running");
});

// Port
const PORT = process.env.PORT || 10000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

