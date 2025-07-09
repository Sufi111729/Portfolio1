const express = require("express");
const { v4: uuidv4 } = require("uuid");
const openaiService = require("../services/openaiService");
const { asyncHandler } = require("../middleware/asyncHandler");
const { validateChatInput } = require("../middleware/validation");

const router = express.Router();

// POST /api/chat - Send message to AI
router.post(
  "/",
  validateChatInput,
  asyncHandler(async (req, res) => {
    const { message, sessionId } = req.body;

    // Generate session ID if not provided
    const finalSessionId = sessionId || uuidv4();

    try {
      // Generate AI response
      const result = await openaiService.generateResponse(
        message,
        finalSessionId,
      );

      res.status(200).json({
        success: true,
        data: {
          response: result.response,
          sessionId: finalSessionId,
          conversationLength: result.conversationLength,
          timestamp: new Date().toISOString(),
        },
        meta: {
          model: result.model,
          usage: result.usage,
        },
      });
    } catch (error) {
      console.error("Chat error:", error);

      // Generate fallback response
      const fallbackResponse = openaiService.generateFallbackResponse(error);

      res.status(200).json({
        success: true,
        data: {
          response: fallbackResponse,
          sessionId: finalSessionId,
          isFallback: true,
          timestamp: new Date().toISOString(),
        },
        error: {
          message: "Using fallback response due to AI service issues",
          details: error.message,
        },
      });
    }
  }),
);

// DELETE /api/chat/:sessionId - Clear conversation history
router.delete(
  "/:sessionId",
  asyncHandler(async (req, res) => {
    const { sessionId } = req.params;

    if (!sessionId || sessionId.length < 10) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Invalid session ID",
          code: "INVALID_SESSION_ID",
        },
      });
    }

    openaiService.clearConversationHistory(sessionId);

    res.status(200).json({
      success: true,
      message: "Conversation history cleared",
      sessionId: sessionId,
      timestamp: new Date().toISOString(),
    });
  }),
);

// GET /api/chat/history/:sessionId - Get conversation history
router.get(
  "/history/:sessionId",
  asyncHandler(async (req, res) => {
    const { sessionId } = req.params;

    if (!sessionId || sessionId.length < 10) {
      return res.status(400).json({
        success: false,
        error: {
          message: "Invalid session ID",
          code: "INVALID_SESSION_ID",
        },
      });
    }

    const history = openaiService.getConversationHistory(sessionId);

    res.status(200).json({
      success: true,
      data: {
        history: history,
        sessionId: sessionId,
        messageCount: history.length,
        timestamp: new Date().toISOString(),
      },
    });
  }),
);

// GET /api/chat/health - Health check for chat service
router.get(
  "/health",
  asyncHandler(async (req, res) => {
    try {
      const openaiHealth = await openaiService.healthCheck();
      const stats = openaiService.getStats();

      res.status(200).json({
        success: true,
        health: {
          service: "healthy",
          openai: openaiHealth,
          stats: stats,
          timestamp: new Date().toISOString(),
        },
      });
    } catch (error) {
      res.status(503).json({
        success: false,
        health: {
          service: "unhealthy",
          error: error.message,
          timestamp: new Date().toISOString(),
        },
      });
    }
  }),
);

// GET /api/chat/stats - Get service statistics
router.get(
  "/stats",
  asyncHandler(async (req, res) => {
    const stats = openaiService.getStats();

    res.status(200).json({
      success: true,
      data: stats,
    });
  }),
);

module.exports = router;
