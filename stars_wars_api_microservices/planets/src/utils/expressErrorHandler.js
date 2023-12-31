const expressErrorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
};

module.exports = expressErrorHandler;
