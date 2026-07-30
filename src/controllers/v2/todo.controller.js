import mongoose from "mongoose";
import V2Todo from "../../models/v2/V2Todo.model.js";

// custom response
const formatTodo = (todo) => ({
  _id: todo._id,
  title: todo.title,
  isCompleted: todo.isCompleted,
  createdAt: todo.createdAt,
  updatedAt: todo.updatedAt
});

// GET all todos
export const getTodos = async (req, res) => {
  try {
    const todos = await V2Todo.find({ userId: req.user._id }).sort({createdAt: -1});

    res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      todos: todos.map((todo)=> formatTodo(todo))
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// CREATE todo
export const createTodo = async (req, res) => {
  try {
    const { title, isCompleted } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required"
      });
    }

    const todo = await V2Todo.create({
      title,
      isCompleted: isCompleted ?? false,
      userId: req.user._id
    });


    return res.status(201).json({
      success: true,
      message: "Todo created successfully",
      todo: formatTodo(todo)
    });


  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};



// UPDATE todo
export async function updateTodo(req, res) {
  const { id } = req.params;
  const { title, isCompleted } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid todo id!"
    });
  }


  const updateData = {};
  if (title !== undefined) updateData.title = title; 
  if (isCompleted !== undefined) updateData.isCompleted = isCompleted;

  if (Object.keys(updateData).length === 0) {
    return res.status(400).json({
      success: false,
      message: "No valid fields to update"
    });
  }

  try {
    const todo = await V2Todo.findOneAndUpdate({ _id: id, userId: req.user._id
      },
      updateData,
      {
        returnDocument: "after",
        runValidators: true
      }
    );

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      todo
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}



// DELETE todo
export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid todo id!"
    });
  }

  try {
    const todo = await V2Todo.findOneAndDelete({
      _id: id,
      userId: req.user._id
    });


    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
      deletedTodo: {
        id: todo._id,
        title: todo.title
      }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};