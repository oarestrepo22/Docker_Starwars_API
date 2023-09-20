/**
 * Middleware para capturar y manejar errores asincrónicos en funciones de controladores de Express.
 *
 * @param {Function} fn - Una función handler asincrónica que realiza operaciones asíncronas.
 * @returns {Function} - Un middleware de Express que envuelve la función handler asincrónica y maneja sus errores.
 *
 * @example
 * // Uso típico en una ruta de Express:
 * app.get('/ruta', catchedAsync(async (req, res) => {
 *   // Código asincrónico que puede generar errores.
 *   const resultado = await algunaOperacionAsincronica();
 *   res.json(resultado);
 * }));
 */
const catchedAsync = (fn) => {
  /**
   * Middleware de Express para capturar y manejar errores asincrónicos.
   *
   * @async
   * @function
   * @param {Object} req - El objeto de solicitud de Express.
   * @param {Object} res - El objeto de respuesta de Express.
   * @param {Function} next - La función para pasar el control al siguiente middleware o manejar errores.
   */
  return async (req, res, next) => {
    try {
      // Ejecuta la función handler asincrónica y espera su resultado.
      const resultado = await fn(req, res);
      // Envia la respuesta si la función handler asincrónica se resuelve con éxito.
      res.json(resultado);
    } catch (err) {
      // Si la función handler asincrónica genera un error, lo pasa al middleware de manejo de errores.
      next(err);
    }
  };
};

module.exports = catchedAsync;
