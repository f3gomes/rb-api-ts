import mongoose from "mongoose";

const { Schema } = mongoose;

export const hobbySchema = new Schema({
  name: {
    type: String,
  },
  icon: {
    type: String,
  },
});

export const Hobby = mongoose.model("Hobby", hobbySchema);
