import mongoose from "mongoose";
import Todo from "../models/todo.model.js"

// Create Todo
export async function createTodo(req, res){
  const {title} = req.body;
  if(!title || !title.trim()){
    return res.status(400).json({
      success: false,
      message: "Title is required"
    })
  }

  try {
    const todo = await Todo.create({
      title
    });
    
    return res.status(201).json({
      success: true,
      message: "Todo created successfully",
      data:{
        _id: todo._id,
        title: todo.title,
        isCompleted: todo.isCompleted,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt
      }
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })    
  }
}


// Get all Todos
export async function getTodos(req, res){
  try {
    const todos = await Todo.find().sort({createdAt: -1});
    return res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      data: todos
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}


// Update todo by ID
export async function updateTodo(req, res){
  const {id} = req.params;
  const {title, isCompleted} = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({
      success: false,
      message: "Invalid todo id!"
    })
  }

  try {
    const updateData = {};
    if(title !== undefined) updateData.title = title;
    if(isCompleted !== undefined) updateData.isCompleted = isCompleted;

    const todo = await Todo.findByIdAndUpdate(id, updateData, {
      returnDocument: "after",
      runValidators: true
    });

    if(!todo){
      return res.status(404).json({
        success: false,
        message: "Todo not found"
      })
    }

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: todo
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}


// Delete todo by ID
export async function deleteTodo(req, res){
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({
      success: false,
      message: "Invalid todo id",
    })
  }

  try {
    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found"
      });
    }
    
    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}