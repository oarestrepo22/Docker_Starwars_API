/**
 * Middleware para capturar y manejar errores asincrónicos en funciones de controladores de Express.
 *
 * @param {Function} fn - Una función handler asincrónica que realiza operaciones asíncronas.
 * @returns {Function} - Un middleware de Express que envuelve la función handler asincrónica y maneja sus errores.
 *
 */
const catchedAsync = (fn) => {
  return (req, res, next) => {
    /*
     * fn(req, res) Ejecuta la función handler asincrónica y espera su resultado.
     * Si la funcion handler asincrónica se resuelve con exito, envia la respuesta.
     * Si la función handler asincrónica genera un error, lo pasa al middleware de manejo de errores.
     ** next(err) envia el error capturado al manejador de errores de Express
     *  */
    fn(req, res).catch((err) => {
      next(err);
    });
  };
};

module.exports = catchedAsync;
