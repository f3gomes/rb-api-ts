import mongoose from "mongoose";

const { Schema } = mongoose;

export const experienceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    yearCompany: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Experience = mongoose.model("Experience", experienceSchema);
