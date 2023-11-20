import mongoose from "mongoose";

const { Schema } = mongoose;

export const socialSchema = new Schema({
  name: {
    type: String,
  },
  link: {
    type: String,
  },
  icon: {
    type: String,
  },
});

export const Social = mongoose.model("Social", socialSchema);
