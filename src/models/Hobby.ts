import mongoose from "mongoose";

const { Schema } = mongoose;

export const hobbySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Hobby = mongoose.model("Hobby", hobbySchema);
