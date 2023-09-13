/**
 * Middleware que captura errores en una función asíncrona y los pasa al siguiente middleware o manejador de errores.
 *
 * @param {Function} fn - La función que maneja la solicitud y la respuesta, debe ser una función asíncrona.
 * @returns {Function} Un middleware que envuelve la función dada para capturar y manejar errores.
 *
 * @example
 * // Utilización en una ruta de Express
 * app.get('/ruta', errorsHandler(async (req, res) => {
 *   // Tu lógica asíncrona aquí
 * }));
 */

const errorsHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res).catch((err) => {
      next(err);
    });
  };
};

module.exports = errorsHandler;
