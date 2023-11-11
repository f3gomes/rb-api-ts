import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  getUsersNameList,
  updateUser,
} from "../controllers/userController";

export const userRoutes = express.Router();

userRoutes.get("/", getUsers);
userRoutes.get("/list", getUsersNameList);

userRoutes.post("/", createUser);

userRoutes.put("/:id", updateUser);

userRoutes.delete("/:id", deleteUser);
