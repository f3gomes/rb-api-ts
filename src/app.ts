import cors from "cors";
import express from "express";
import { json } from "body-parser";
import { userRoutes } from "./routes/userRoutes";
import { main as connectDB } from "./config/database";

export const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(json());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello Resume API!" });
});

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
