import 'dotenv/config'
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import apiRouter from "./routers/api.router";
import errorMiddleware from "./middlewares/error.middleware"
import requestsMiddleware from "./middlewares/requests.middleware"

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors({ origin: '*'}))
app.use(express.json());
app.use(requestsMiddleware);

app.use('/api', async (req, res, next) => {
    try {
        apiRouter(req, res, next);
    } catch (e) {
        next(e);
    }
});

app.use(errorMiddleware);

async function start() {
    await mongoose.connect(process.env.MONGO_URI!);
    app.listen(PORT, () => console.log('Backend started'));
}

start();