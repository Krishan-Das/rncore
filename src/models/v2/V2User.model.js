import mongoose from "mongoose";

const v2UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true
    },

    apiKey: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);


const V2User = mongoose.model(
  "V2User",
  v2UserSchema
);

export default V2User;