import express from "express";
import loginControler from "./routes/loginRoute.js";
import readTodosControler from "./routes/readTodosRoute.js";
import isLogged from "./middlewere/isLogged.js";
import createTodosControler from "./routes/createTodoRoute.js";

const router = express.Router();

router.post("/login", loginControler);
router.get("/todos", isLogged, readTodosControler);
router.post("/todos", isLogged, createTodosControler);

export default router;
