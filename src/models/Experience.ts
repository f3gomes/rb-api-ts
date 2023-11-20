import mongoose from "mongoose";

const { Schema } = mongoose;

export const experienceSchema = new Schema({
  title: {
    type: String,
  },
  yearCompany: {
    type: String,
  },
  description: {
    type: String,
  },
});

export const Experience = mongoose.model("Experience", experienceSchema);
