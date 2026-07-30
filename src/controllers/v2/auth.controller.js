import crypto from "crypto";
import bcrypt from "bcryptjs";
import V2User from "../../models/v2/V2User.model.js";
import V2Todo from "../../models/v2/V2Todo.model.js"


const generateApiKey = () => {
  return "rn_" + crypto.randomBytes(16).toString("hex");
};


// Register
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const existingUser = await V2User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const apiKey = "rn_" + crypto.randomBytes(16).toString("hex");

    const user = await V2User.create({ name, email, password: hashedPassword, apiKey });
    await V2Todo.insertMany([
      {
        title: "Read the RNCore API documentation",
        userId: user._id
      },
      {
        title: "Update this todo to practice PATCH",
        userId: user._id
      },
      {
        title: "Delete this todo to practice DELETE",
        userId: user._id
      }
    ]);

    return res.status(201).json({
      success: true,
      message: "Account created successfully",

      apiUrl:
        `https://rncore.onrender.com/api/v2/${apiKey}/todos`
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};



// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    const user = await V2User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",

      apiUrl:
        `https://rncore.onrender.com/api/v2/${user.apiKey}/todos`
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};