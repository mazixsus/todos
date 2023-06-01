import model from "../models/todoModels.js";

export default async (request, response) => {
    const id = request.params.id;

    const todo = await model.findById(id);
    todo.text = request.body.text;
    todo.completed = request.body.completed;
    await todo.save();
    response.json(todo);
}