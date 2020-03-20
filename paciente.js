import Nombre from './Nombre.js';
import Fecha from './fecha.js';
export default class Pacientes {
  /**
   *
   * @param {Nombre} nombre
   * @param {Fecha} fechaNacimiento
   * @param {number} numeroTel
   */
  constructor(nombre, fechaNacimiento, telefono) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.telefono = telefono;
  }

  getPerfil() {
    return `${this.nombre.getNombreCompleto()}, ${this.fechaNacimiento.getFecha()}, ${
      this.telefono
    }`;
  }
}
