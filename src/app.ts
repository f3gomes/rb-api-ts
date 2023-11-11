import cors from "cors";
import express from "express";
import { json } from "body-parser";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(json());

// connectDB();

app.use("/hello", (req, res) => {
  res.json({ message: "Hello Resume API!" });
});

// app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
