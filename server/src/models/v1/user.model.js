import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    avatar: {
      type: String,
      required: true,
    },

    company: {
      name: {
        type: String,
        trim: true,
      },
    },

    address: {
      street: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      zipcode: {
        type: String,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;