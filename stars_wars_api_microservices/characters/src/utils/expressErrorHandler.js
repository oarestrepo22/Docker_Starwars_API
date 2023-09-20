const errorHandler = (err, req, res, next) => {
  next(err.message);
};

module.exports = errorHandler;
