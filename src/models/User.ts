import mongoose from "mongoose";

import { hobbySchema } from "./Hobby";
import { skillSchema } from "./Skill";
import { socialSchema } from "./Social";
import { languageSchema } from "./Language";
import { referenceSchema } from "./Reference";
import { educationSchema } from "./Education";
import { experienceSchema } from "./Experience";
import {
  dedfaultSkills,
  defaultEducation,
  defaultExperiences,
  defaultHobbys,
  defaultLanguages,
  defaultReferences,
  defaultSocials,
} from "../default/types";

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
      default: defaultSocials,
    },
    education: {
      type: [educationSchema],
      default: defaultEducation,
    },
    skills: {
      type: [skillSchema],
      default: dedfaultSkills,
    },
    experiences: {
      type: [experienceSchema],
      default: defaultExperiences,
    },
    references: {
      type: [referenceSchema],
      default: defaultReferences,
    },
    languages: {
      type: [languageSchema],
      default: defaultLanguages,
    },
    hobbys: {
      type: [hobbySchema],
      default: defaultHobbys,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
