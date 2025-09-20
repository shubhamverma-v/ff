import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getChatbotResponse } from "./gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

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

  const httpServer = createServer(app);

  return httpServer;
}
