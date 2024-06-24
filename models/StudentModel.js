import mongoose from "mongoose";


const userSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // User's email
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // Reference to the user's role using Role's ObjectId
  role: {
    type: mongoose.Schema.Types.ObjectId,
    default: "6009c0eee65f6dce28fb3e50", // Default role ID if not specified
    required: true,
    ref: "Role",
  },
  // User's password (you should store hashed passwords)
  password: {
    type: String,
    required: true,
    trim: true,
  },
  // User's photo URL
  photo: {
    type: String,
    trim: true,
    default: null,
  },
  // Indicates the status of the user (e.g., active or inactive)
  status: {
    type: Boolean,
    trim: true,
    default: true,
  },
  // Indicates whether the user has been marked as "trashed" (soft delete)
  trash: {
    type: Boolean,
    trim: true,
    default: true,
  },
}, {

  timestamps: true,
});

// Create a Mongoose model based on the userSchema
export const studentModel = mongoose.model("Student", userSchema);