import todoModel from "../models/todoModels.js";

export default async (request, response) => {
  const {text} = request.body;
  const todo = new todoModel({
    text,
    completed: false,
  })
  console.log(text);
  const newTodo = await todo.save();
  response.json(newTodo);
};
