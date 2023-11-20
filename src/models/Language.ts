import mongoose from "mongoose";

const { Schema } = mongoose;

export const languageSchema = new Schema({
  name: {
    type: String,
  },
  level: {
    type: String,
  },
});

export const Language = mongoose.model("Language", languageSchema);
