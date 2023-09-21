class ClientError extends Error {
  constructor(message, statusCode = 400) {
    // Error tiene una propiedad llamada message. con super(meessage) estoy asignandole el valor que me llega por message
    super(message);
    // creo una variable statusCode dentro de CLien Error y le asigno el valor que recibo en statusCode
    this.statusCode = statusCode;
  }
}
module.exports = ClientError;
