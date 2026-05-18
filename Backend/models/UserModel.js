import { Schema, model } from "mongoose";

// Create User Schema with validations
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"]
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"]
    },

    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"]
    },

    mobileNumber: {
      type: Number
    },

    status: {
      type: Boolean
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// Create User Model
const UserModel = model("User", userSchema);

export default UserModel;