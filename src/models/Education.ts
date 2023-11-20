import mongoose from "mongoose";

const { Schema } = mongoose;

export const educationSchema = new Schema({
  title: {
    type: String,
  },
  studies: {
    type: String,
  },
  year: {
    type: String,
  },
});

export const Education = mongoose.model("Education", educationSchema);
