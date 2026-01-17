import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ROOT ROUTE
app.get("/", (req, res) => {
  res.send("Expense Tracker API is running");
});
app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});

app.get("/api/test/", (req, res) => {
  res.json({ message: "API working" });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});

