import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserAPI from "./APIs/UserApi.js";   

dotenv.config();
const app = express();
app.use(express.json());

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error.message);
    process.exit(1);
  }
}

connectDB();
app.get("/check", (req, res) => {
  res.send("Server is working properly");
});
// ✅ Mount your mini-express app
app.use("/userapi", UserAPI);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong",
    error: err.message
  });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});

