import dotenv from "dotenv"
dotenv.config();

if (!process.env.PORT) {
  throw new Error("PORT environment variable is missing.");
}
if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI environment variable is missing.");
}
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is missing.");
}
if (!process.env.NODE_ENV) {
  throw new Error("NODE_ENV environment variable is missing.");
}

const config = {
  CLIENT_URL: process.env.CLIENT_URL,
  PORT: process.env.PORT,
  MONGO_URI : process.env.MONGO_URI,
  JWT_SECRET : process.env.JWT_SECRET,
  NODE_ENV : process.env.NODE_ENV
}

export default config;