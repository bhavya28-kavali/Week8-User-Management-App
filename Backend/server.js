import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import UserAPI from "./APIs/UserApi.js";

dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
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

// Root Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Test Route
app.get("/check", (req, res) => {
  res.send("Server is working properly");
});


// User Routes
app.use("/userapi", UserAPI);


// Error Handling Middleware
app.use((err, req, res, next) => {

  console.error(err.stack);

  // Mongoose Validation Error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }

  // Invalid Mongo ID
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  // Duplicate Email Error
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Email already exists",
    });
  }

  res.status(500).json({
    message: "Internal Server Error",
    error: err.message
  });
});


// Server Start
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});