// funcion de orden superior que recibe un handler y lo devuelve mejorado
const catchedAsyncError = (fn) => {
  return (req, res, next) => {
    /* la función interna necesita recibir estos parámetros (req, res, next)
    de manera explícita para que pueda usarse como un middleware de Express. */
    fn(req, res).catch((err) => {
      next(err);
    });
  };
};

module.exports = catchedAsyncError;
