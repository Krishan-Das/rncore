import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

import V2User from "../../models/v2/V2User.model.js";
import V2Todo from "../../models/v2/V2Todo.model.js";
import config from "../../config/config.js"


const generateApiKey = () => {
  return "rn_" + crypto.randomBytes(16).toString("hex");
};

const cookieOptions = {
  httpOnly: true,
  secure: config.NODE_ENV === "production",
  sameSite: config.NODE_ENV === "production" ? "none" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};


// Register
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    // Existing user check
    const existingUser = await V2User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // Generate unique API key
    let apiKey;

    do {
      apiKey = generateApiKey();
    } while (await V2User.exists({ apiKey }));

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await V2User.create({
      name,
      email,
      password: hashedPassword,
      apiKey,
    });

    // Default todos
    await V2Todo.insertMany([
      {
        title: "Read the RNCore API documentation",
        userId: user._id,
      },
      {
        title: "Update this todo to practice PATCH",
        userId: user._id,
      },
      {
        title: "Delete this todo to practice DELETE",
        userId: user._id,
      },
    ]);

    // Generate JWT
    const token = jwt.sign(
      {
        userId: user._id,
      },
      config.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Set Cookie
    res.cookie("token", token, cookieOptions);

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    return res.status(201).json({
      success: true,
      message: "Account created successfully",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },

      api: {
        key: user.apiKey,
        url: `${baseUrl}/api/v2/${user.apiKey}/todos`,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
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
        message: "Email and password are required",
      });
    }

    const user = await V2User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id },
      config.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set Cookie
    res.cookie("token", token, cookieOptions);

    const baseUrl = `${req.protocol}://${req.get("host")}`;

    return res.status(200).json({
      success: true,
      message: "Login successful",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },

      api: {
        key: user.apiKey,
        url: `${baseUrl}/api/v2/${user.apiKey}/todos`,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// logout 
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: config.NODE_ENV === "production" ? "none" : "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// regenerate api
// Regenerate API Key
export const regenerateApiKey = async (req, res) => {
  try {
    // Generate unique API key
    let apiKey;

    do {
      apiKey = generateApiKey();
    } while (await V2User.exists({ apiKey }));

    // Update user
    req.user.apiKey = apiKey;
    await req.user.save();

    const baseUrl = `${req.protocol}://${req.get("host")}`;

    return res.status(200).json({
      success: true,
      message: "API key regenerated successfully",

      api: {
        key: req.user.apiKey,
        url: `${baseUrl}/api/v2/${req.user.apiKey}/todos`,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// me
export const getMe = async (req, res) => {
  try {    
    const baseUrl = `${req.protocol}://${req.get("host")}`;

    return res.status(200).json({
      success: true,

      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
      },

      api: {
        key: req.user.apiKey,
        url: `${baseUrl}/api/v2/${req.user.apiKey}/todos`,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};