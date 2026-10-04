export function errorHandler(error, request, response, next) {
  if (response.headersSent) {
    return next(error);
  }

  const statusCode = error.statusCode || error.status || 500;

  if (statusCode >= 500) {
    console.error(error);
  }

  response.status(statusCode).json({
    status: 'error',
    message: statusCode >= 500 ? 'Internal server error' : error.message,
  });
}