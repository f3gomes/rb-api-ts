import express from "express";
import {
  createUser,
  deleteUser,
  getUserByEmail,
  getUsers,
  getUsersNameList,
  updateUser,
} from "../controllers/userController";

export const userRoutes = express.Router();

userRoutes.get("/", getUsers);
userRoutes.get("/list", getUsersNameList);
userRoutes.get("/:email", getUserByEmail);

userRoutes.post("/", createUser);

userRoutes.put("/:id", updateUser);

userRoutes.delete("/:id", deleteUser);
