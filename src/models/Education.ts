import mongoose from "mongoose";

const { Schema } = mongoose;

export const educationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    studies: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Education = mongoose.model("Education", educationSchema);
