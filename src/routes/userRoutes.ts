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

userRoutes.get("/users", getUsers);
userRoutes.get("/users/names", getUsersNameList);
userRoutes.get("/users/:email", getUserByEmail);

userRoutes.post("/users/new", createUser);
userRoutes.put("/users/:id", updateUser);
userRoutes.delete("/users/:id", deleteUser);
