import express from "express";
import dotenv from "dotenv";
import mongo from "mongoose";

import router from "./router.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

mongo.connect(process.env.MONGO_URL).then(() => {
    console.log("starting on port 8080");
    app.listen("8080");
    //hello hello
});

