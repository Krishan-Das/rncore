import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Title is required"]
  },

  isCompleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Todo = mongoose.model("V1Todo", todoSchema);
export default Todo;