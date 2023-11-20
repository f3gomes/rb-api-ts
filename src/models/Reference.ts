import mongoose from "mongoose";

const { Schema } = mongoose;

export const referenceSchema = new Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
});

export const Reference = mongoose.model("Reference", referenceSchema);
