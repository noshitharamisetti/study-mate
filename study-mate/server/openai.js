import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

// 🔍 DEBUG (TEMPORARY)


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default openai;
