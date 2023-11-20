import mongoose from "mongoose";

import { hobbySchema } from "./Hobby";
import { skillSchema } from "./Skill";
import { socialSchema } from "./Social";
import { languageSchema } from "./Language";
import { referenceSchema } from "./Reference";
import { educationSchema } from "./Education";
import { experienceSchema } from "./Experience";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    about: {
      type: String,
    },
    socials: {
      type: [socialSchema],
    },
    education: {
      type: [educationSchema],
    },
    skills: {
      type: [skillSchema],
    },
    experiences: {
      type: [experienceSchema],
    },
    references: {
      type: [referenceSchema],
    },
    languages: {
      type: [languageSchema],
    },
    hobbys: {
      type: [hobbySchema],
    },
    paidOut: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
