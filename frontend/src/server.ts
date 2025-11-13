import 'dotenv/config';
import express from "express";
import cors from "cors";
import { AppDataSource } from "./db";
import { redisClient } from "./redis";
import userRouter from "./routes/users";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

const start = async () => {
  await AppDataSource.initialize();
  await redisClient.connect();

  app.listen(4000, () => console.log("Backend running on http://localhost:4000"));
};

start();
