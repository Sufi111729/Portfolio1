// Validation middleware for chat input
const validateChatInput = (req, res, next) => {
  const { message, sessionId } = req.body;

  // Validate message
  if (!message) {
    return res.status(400).json({
      success: false,
      error: {
        message: "Message is required",
        code: "MISSING_MESSAGE",
        timestamp: new Date().toISOString(),
      },
    });
  }

  if (typeof message !== "string") {
    return res.status(400).json({
      success: false,
      error: {
        message: "Message must be a string",
        code: "INVALID_MESSAGE_TYPE",
        timestamp: new Date().toISOString(),
      },
    });
  }

  if (message.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: {
        message: "Message cannot be empty",
        code: "EMPTY_MESSAGE",
        timestamp: new Date().toISOString(),
      },
    });
  }

  if (message.length > 2000) {
    return res.status(400).json({
      success: false,
      error: {
        message: "Message too long (max 2000 characters)",
        code: "MESSAGE_TOO_LONG",
        timestamp: new Date().toISOString(),
      },
    });
  }

  // Validate session ID if provided
  if (sessionId && (typeof sessionId !== "string" || sessionId.length < 10)) {
    return res.status(400).json({
      success: false,
      error: {
        message: "Invalid session ID format",
        code: "INVALID_SESSION_ID",
        timestamp: new Date().toISOString(),
      },
    });
  }

  // Sanitize message (basic XSS prevention)
  req.body.message = message
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<[^>]*>/g, "");

  next();
};

module.exports = { validateChatInput };
