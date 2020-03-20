import Nombre from './Nombre.js';
export default class Doctor {
  /**
   *
   * @param {Nombre} nombre
   * @param {string} especialidad
   * @param {number} telefono
   * @param {number} cedula
   */
  constructor(nombre, especialidad, telefono, cedula) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.telefono = telefono;
    this.cedula = cedula;
  }

  getPerfil() {
    return `${this.cedula}, ${
      this.especialidad
    }, ${this.nombre.getNombreCompleto()}, ${this.telefono}`;
  }
}
