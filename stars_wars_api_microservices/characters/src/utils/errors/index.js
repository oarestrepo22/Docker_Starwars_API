/**
 * Clase para representar errores personalizados en el lado del cliente.
 *
 * @extends Error
 *
 * @param {string} message - El mensaje de error descriptivo.
 * @param {number} [statusCode=400] - El código de estado HTTP asociado al error (por defecto, 400 - "Bad Request").
 *
 * @example
 * // Crear una instancia de ClientError
 * const clientError = new ClientError("Mensaje de error personalizado", 404);
 *
 * @throws {Error} Si se proporciona un código de estado no válido.
 */

class ClientError extends Error {
  constructor(message, statusCode = 400) {
    // Llama al constructor de la clase base Error y establece el mensaje de error.
    super(message);

    // crea la variable statusCode dentro de CLientError y le asigna el valor recibido en statusCode
    this.statusCode = statusCode;
  }
}

module.exports = ClientError;
