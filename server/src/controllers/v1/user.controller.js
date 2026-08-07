import User from "../../models/v1/user.model.js";


// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-__v");

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: {
        users,
      },
    });

  } catch (error) {
    console.error("Get users error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};


// Get single user by id
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-__v");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: {
        user,
      },
    });

  } catch (error) {
    console.error("Get user error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch user",
    });
  }
};