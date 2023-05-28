import mongo from "mongoose";

const todoSchema = mongo.Schema({
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const todoModel = mongo.model("Todo", todoSchema);

export default todoModel;
