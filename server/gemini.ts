import { GoogleGenAI } from "@google/genai";

// DON'T DELETE THIS COMMENT
// Follow these instructions when using this blueprint:
// - Note that the newest Gemini model series is "gemini-2.5-flash" or gemini-2.5-pro"
//   - do not change this unless explicitly requested by the user

// This API key is from Gemini Developer API Key, not vertex AI API Key
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getChatbotResponse(
  userMessage: string,
  language: string = "hi"
): Promise<string> {
  try {
    const model = genAI.models;

    const languageMap: { [key: string]: string } = {
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

    const result = await model.generateContent({
      model: "gemini-2.5-flash",
      contents: systemPrompt,
    });
    return result.text || "मुझसे कुछ गलती हुई है। कृपया फिर से प्रयास करें। (Something went wrong. Please try again.)";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "तकनीकी समस्या के कारण उत्तर नहीं दे सकता। कृपया बाद में प्रयास करें। (Unable to respond due to technical issues. Please try again later.)";
  }
}