import express from "express";
import UserModel from "../models/UserModel.js";

const userApp = express.Router();


// GET ALL USERS
userApp.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();

    res.status(200).json(users);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message
    });
  }
});


// CREATE USER
userApp.post("/users", async (req, res) => {
  try {

    console.log(req.body);

    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      dateOfBirth: req.body.dateOfBirth,
      mobileNumber: req.body.mobileNumber,
      status: true
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);

  } catch (error) {

    console.log("POST ERROR:", error);

    res.status(500).json({
      message: error.message
    });
  }
});


// GET USER BY ID
userApp.get("/users/:id", async (req, res) => {
  try {

    const user = await UserModel.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });
  }
});


// UPDATE USER
userApp.put("/users/:id", async (req, res) => {
  try {

    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedUser);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });
  }
});


// DELETE USER
userApp.delete("/users/:id", async (req, res) => {
  try {

    await UserModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "User deleted successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });
  }
});

export default userApp;