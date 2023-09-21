const expressErrorHandler = (err, req, res, next) => {
  res.status(err.statusCode).json({
    error: true,
    message: err.message,
  });
};

module.exports = expressErrorHandler;
