const response = (res, statuscode, data) => {
  res.status(statuscode).json({
    error: false,
    data,
  });
};

module.exports = response;
