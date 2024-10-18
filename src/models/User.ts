import mongoose from "mongoose";

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
      type: [
        {
          name: {
            type: String,
          },
          link: {
            type: String,
          },
          icon: {
            type: String,
          },
        },
      ],
      default: defaultSocials,
    },
    education: {
      type: [
        {
          title: {
            type: String,
          },
          studies: {
            type: String,
          },
          year: {
            type: String,
          },
        },
      ],
      default: defaultEducation,
    },
    skills: {
      type: [
        {
          name: {
            type: String,
          },
        },
      ],
      default: dedfaultSkills,
    },
    experiences: {
      type: [
        {
          title: {
            type: String,
          },
          yearCompany: {
            type: String,
          },
          description: {
            type: String,
          },
        },
      ],
      default: defaultExperiences,
    },
    references: {
      type: [
        {
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
        },
      ],
      default: defaultReferences,
    },
    languages: {
      type: [
        {
          name: {
            type: String,
          },
          level: {
            type: String,
          },
        },
      ],
      default: defaultLanguages,
    },
    hobbys: {
      type: [
        {
          name: {
            type: String,
          },
          icon: {
            type: String,
          },
        },
      ],
      default: defaultHobbys,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
