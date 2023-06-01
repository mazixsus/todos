import model from "../models/todoModels.js";

export default async (request, response) => {
  const id = request.params.id;
  const todo = await model.findByIdAndRemove(id);
  //await todo.remove();
  response.status(204).send("Todo has been deleted successfully!");
};
