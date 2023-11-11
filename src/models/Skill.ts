import mongoose from "mongoose";

const { Schema } = mongoose;

export const skillSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Skill = mongoose.model("Skill", skillSchema);
