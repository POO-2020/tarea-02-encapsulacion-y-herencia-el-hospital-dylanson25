export default class Nombre {
  /**
   *
   * @param {string} nombre
   * @param {string} apellidoPaterno
   * @param {string} apellidoMaterno
   */
  constructor(nombre, apellidoPaterno, apellidoMaterno) {
    this.nombre = nombre.toUpperCase();
    this.apellidoPaterno = apellidoPaterno.toUpperCase();
    this.apellidoMaterno = apellidoMaterno.toUpperCase();
  }

  getNombreCompleto() {
    return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
  }

  getApellidoNombre() {
    return `${this.apellidoPaterno} ${this.apellidoMaterno} ${this.nombre}`;
  }

  getIniciales() {
    return `${this.nombre[0]}${this.apellidoPaterno[0]}${this.apellidoMaterno[0]}`;
  }
}
