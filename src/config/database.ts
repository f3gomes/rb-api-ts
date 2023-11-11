import dotenv from "dotenv";
import mongoose from "mongoose";

export const main = async () => {
  dotenv.config();
  const uri = String(process.env.DB_URL);

  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(uri);

    console.log("Database connected");
  } catch (error) {
    console.log(`Connect Error: ${error}`);
  }
};
