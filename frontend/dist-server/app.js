import 'dotenv/config';
import express from "express";
import cors from "cors";
import { AppDataSource } from "./db.js";
import { redisClient } from "./redis.js";
import userRouter from "./routes/users.js";
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
