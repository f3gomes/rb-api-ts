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
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    socials: {
      type: [socialSchema],
      required: true,
    },
    education: {
      type: [educationSchema],
      required: true,
    },
    skills: {
      type: [skillSchema],
      required: true,
    },
    experiences: {
      type: [experienceSchema],
      required: true,
    },
    references: {
      type: [referenceSchema],
      required: true,
    },
    languages: {
      type: [languageSchema],
      required: true,
    },
    hobbys: {
      type: [hobbySchema],
      required: true,
    },
    paidOut: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
