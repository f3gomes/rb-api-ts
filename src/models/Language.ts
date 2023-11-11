import mongoose from "mongoose";

const { Schema } = mongoose;

export const languageSchema = new Schema(
  {
    nane: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Language = mongoose.model("Language", languageSchema);
