console.log("UserApi Loaded Successfully");
import express from "express";
import UserModel from "../models/UserModel.js";

const UserApp = express.Router();

// Create User
UserApp.post("/users", async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read all Users
UserApp.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read user by id
UserApp.get("/users/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete user by id
UserApp.delete("/users/:id", async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json({ message: "User Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update user by id
UserApp.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
export default UserApp