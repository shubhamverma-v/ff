const express = require('express');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Initialize Gemini AI
const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY || "");

// Helper function for chatbot responses
async function getChatbotResponse(userMessage, language = "hi") {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const languageMap = {
      hi: "Hindi",
      en: "English", 
      pa: "Punjabi",
      mr: "Marathi"
    };

    const responseLanguage = languageMap[language] || "Hindi";

    const systemPrompt = `You are an AI assistant for Indian farmers called "Krishi Sahayak" (Agricultural Helper). You help farmers with:
- Agricultural advice and best practices
- Crop management and disease identification
- Market prices and trends
- Weather-related farming guidance
- Government schemes and subsidies
- Sustainable farming techniques
- Pest control methods
- Irrigation and water management

Please respond in ${responseLanguage} language. Be helpful, practical, and focus on actionable advice. Keep responses concise but informative. If you don't know something specific about Indian agriculture, agriculture, or farming, acknowledge it and suggest they consult local agricultural experts.

User question: ${userMessage}`;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    return response.text() || "मुझसे कुछ गलती हुई है। कृपया फिर से प्रयास करें। (Something went wrong. Please try again.)";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "तकनीकी समस्या के कारण उत्तर नहीं दे सकता। कृपया बाद में प्रयास करें। (Unable to respond due to technical issues. Please try again later.)";
  }
}

// Chatbot API endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, language = "hi" } = req.body;
    
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await getChatbotResponse(message, language);
    res.json({ response });
  } catch (error) {
    console.error("Chat API error:", error);
    res.status(500).json({ 
      error: "तकनीकी समस्या के कारण उत्तर नहीं दे सकता। कृपया बाद में प्रयास करें। (Unable to respond due to technical issues. Please try again later.)" 
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Agricultural Assistant API is running" });
});

// Catch all API routes
app.all("/api/*", (req, res) => {
  res.status(404).json({ error: "API endpoint not found" });
});

module.exports = app;