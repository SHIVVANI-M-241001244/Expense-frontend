import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Routes
import expenseRoutes from "./routes/expenseroutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ ROOT CHECK
app.get("/", (req, res) => {
  res.send("Expense Tracker API is running");
});

// ✅ TEST ROUTE (VERY IMPORTANT)
app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});

// ✅ AUTH ROUTES
app.use("/api/auth", authRoutes);

// ✅ EXPENSE ROUTES
app.use("/api/expenses", expenseRoutes);

// Port
const PORT = process.env.PORT || 10000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

