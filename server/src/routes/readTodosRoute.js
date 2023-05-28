import todoModel from "../models/todoModels.js";

export default async (request, response) => {
  const todos = await todoModel.find();
  response.json(todos);
};
