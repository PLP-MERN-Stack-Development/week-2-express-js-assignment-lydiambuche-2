// middleware/errorHandler.js

// Global error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(`Error: ${err.message}`); // Log the error 

  // Send error response
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
