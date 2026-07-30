import dotenv from "dotenv"
dotenv.config();

if (!process.env.CLIENT_URL) {
  throw new Error("CLIENT_URL environment variable is missing.");
}
if (!process.env.PORT) {
  throw new Error("PORT environment variable is missing.");
}
if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI environment variable is missing.");
}

const config = {
  CLIENT_URL: process.env.CLIENT_URL,
  PORT: process.env.PORT,
  MONGO_URI : process.env.MONGO_URI
}

export default config;