const OpenAI = require("openai");

class OpenAIService {
  constructor() {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is required");
    }

    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // In-memory storage for conversation contexts
    this.conversationMemory = new Map();
    this.maxContextLength = 5; // Remember last 5 interactions
  }

  // System message that defines the AI's personality and context
  getSystemMessage() {
    return {
      role: "system",
      content: `You are an intelligent AI assistant for Muhammad Sufiyan's (also known as MD Sufi or Sufi) professional portfolio website. You are knowledgeable, helpful, and professional.

Key information about Sufi:
- Full Stack Java Developer specializing in Spring Boot, React, and MySQL
- Computer Science graduate seeking Graduate Engineer Trainee opportunities
- Based in Bangalore, India, open to relocation
- Skills: Java, Spring Boot, React, MySQL, JavaScript, HTML/CSS, Git, RESTful APIs
- Email: muhammadsufiyandev01@gmail.com
- LinkedIn: linkedin.com/in/sufiyan2k1
- GitHub: github.com/Sufi111729
- Passionate about telecom and network infrastructure
- Fresh graduate with hands-on project experience

Guidelines:
1. Be conversational and friendly but professional
2. Provide accurate information about Sufi's background
3. If asked about something not related to Sufi or his portfolio, politely redirect
4. Encourage visitors to contact Sufi for opportunities
5. Use emojis sparingly and appropriately
6. Keep responses concise but informative
7. If you don't know specific details, suggest contacting Sufi directly

Remember: You're representing a professional portfolio, so maintain a balance between being personable and professional.`,
    };
  }

  // Get conversation history for a session
  getConversationHistory(sessionId) {
    return this.conversationMemory.get(sessionId) || [];
  }

  // Add message to conversation history
  addToConversationHistory(sessionId, role, content) {
    let history = this.conversationMemory.get(sessionId) || [];

    // Add new message
    history.push({ role, content, timestamp: new Date().toISOString() });

    // Keep only the last maxContextLength interactions (user + assistant pairs)
    if (history.length > this.maxContextLength * 2) {
      history = history.slice(-this.maxContextLength * 2);
    }

    this.conversationMemory.set(sessionId, history);
    return history;
  }

  // Clear conversation history for a session
  clearConversationHistory(sessionId) {
    this.conversationMemory.delete(sessionId);
  }

  // Generate AI response
  async generateResponse(message, sessionId) {
    try {
      // Get conversation history
      const history = this.getConversationHistory(sessionId);

      // Add user message to history
      this.addToConversationHistory(sessionId, "user", message);

      // Prepare messages for OpenAI
      const messages = [
        this.getSystemMessage(),
        ...history.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
        {
          role: "user",
          content: message,
        },
      ];

      // Call OpenAI API
      const completion = await this.openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || "gpt-4",
        messages: messages,
        max_tokens: parseInt(process.env.MAX_TOKENS) || 500,
        temperature: parseFloat(process.env.TEMPERATURE) || 0.7,
        top_p: 1,
        frequency_penalty: 0.3,
        presence_penalty: 0.3,
        stream: false,
      });

      const aiResponse = completion.choices[0].message.content;

      // Add AI response to history
      this.addToConversationHistory(sessionId, "assistant", aiResponse);

      return {
        response: aiResponse,
        usage: completion.usage,
        model: completion.model,
        conversationLength: this.getConversationHistory(sessionId).length,
      };
    } catch (error) {
      console.error("OpenAI API Error:", error);

      // Handle specific OpenAI errors
      if (error.code === "insufficient_quota") {
        throw new Error("OpenAI quota exceeded. Please try again later.");
      } else if (error.code === "invalid_api_key") {
        throw new Error("Invalid OpenAI API key configuration.");
      } else if (error.code === "rate_limit_exceeded") {
        throw new Error(
          "Rate limit exceeded. Please wait a moment before trying again.",
        );
      } else if (error.code === "model_not_found") {
        throw new Error("Requested AI model not available.");
      }

      throw new Error("AI service temporarily unavailable. Please try again.");
    }
  }

  // Generate fallback response when AI fails
  generateFallbackResponse(error) {
    const fallbacks = [
      "I'm having trouble processing your request right now. For immediate assistance, please contact Sufi directly at muhammadsufiyandev01@gmail.com.",
      "Sorry, I'm experiencing technical difficulties. You can reach out to Muhammad Sufiyan on LinkedIn at linkedin.com/in/sufiyan2k1 for more information.",
      "I apologize for the inconvenience. While I'm offline, feel free to explore Sufi's portfolio sections or download his resume for detailed information.",
      "Technical issues are preventing me from responding properly. For the most up-to-date information about Sufi's work and experience, please contact him directly.",
    ];

    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

  // Health check for OpenAI service
  async healthCheck() {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hi" }],
        max_tokens: 10,
      });

      return {
        status: "healthy",
        model: response.model,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      return {
        status: "unhealthy",
        error: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  }

  // Get conversation statistics
  getStats() {
    return {
      totalSessions: this.conversationMemory.size,
      totalMessages: Array.from(this.conversationMemory.values()).reduce(
        (total, history) => total + history.length,
        0,
      ),
      timestamp: new Date().toISOString(),
    };
  }
}

module.exports = new OpenAIService();
