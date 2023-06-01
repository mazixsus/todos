import express from "express";
import loginControler from "./routes/loginRoute.js";
import readTodosControler from "./routes/readTodosRoute.js";
import isLogged from "./middlewere/isLogged.js";
import createTodosControler from "./routes/createTodoRoute.js";
import updateTodosControler from "./routes/updateTodoRoute.js";
import deleteTodosControler from "./routes/deleteTodoRoute.js";

const router = express.Router();

router.post("/login", loginControler);
router.get("/todos", isLogged, readTodosControler);
router.post("/todos", isLogged, createTodosControler);
router.put("/todos/:id", isLogged, updateTodosControler);
router.delete("/todos/:id", isLogged, deleteTodosControler);

export default router;
