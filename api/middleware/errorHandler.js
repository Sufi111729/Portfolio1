// Global error handler middleware
const errorHandler = (err, req, res, next) => {
  console.error("Error Stack:", err.stack);

  // Default error
  let error = {
    message: err.message || "Internal Server Error",
    status: err.status || 500,
    code: err.code || "INTERNAL_ERROR",
  };

  // Specific error types
  if (err.name === "ValidationError") {
    error = {
      message: "Invalid input data",
      status: 400,
      code: "VALIDATION_ERROR",
      details: err.details || err.message,
    };
  } else if (err.name === "UnauthorizedError") {
    error = {
      message: "Unauthorized access",
      status: 401,
      code: "UNAUTHORIZED",
    };
  } else if (err.code === "ENOTFOUND" || err.code === "ECONNREFUSED") {
    error = {
      message: "External service unavailable",
      status: 503,
      code: "SERVICE_UNAVAILABLE",
    };
  } else if (err.type === "entity.parse.failed") {
    error = {
      message: "Invalid JSON in request body",
      status: 400,
      code: "INVALID_JSON",
    };
  } else if (err.type === "entity.too.large") {
    error = {
      message: "Request body too large",
      status: 413,
      code: "PAYLOAD_TOO_LARGE",
    };
  }

  // Don't leak error details in production
  const response = {
    success: false,
    error: {
      message: error.message,
      code: error.code,
      timestamp: new Date().toISOString(),
    },
  };

  // Add stack trace in development
  if (process.env.NODE_ENV === "development") {
    response.error.stack = err.stack;
    response.error.details = error.details;
  }

  res.status(error.status).json(response);
};

module.exports = { errorHandler };
