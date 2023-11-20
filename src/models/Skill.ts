import mongoose from "mongoose";

const { Schema } = mongoose;

export const skillSchema = new Schema({
  name: {
    type: String,
  },
});

export const Skill = mongoose.model("Skill", skillSchema);
