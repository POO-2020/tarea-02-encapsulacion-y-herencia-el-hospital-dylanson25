import Nombre from './nombre.js';
export default class Doctor {
  /**
   *
   * @param {Nombre} nombre
   * @param {string} especialidad
   * @param {number} telefono
   * @param {number} cedula
   */
  constructor({nombre, especialidad, telefono, cedula}) {
    this._nombre = nombre;
    this._especialidad = especialidad;
    this._telefono = telefono;
    this._cedula = cedula;
  }
  getNombreDoctor(){
    return `${this._nombre.getApellidoPaterno()}`
  }
  getPerfil() {
    return `${this._cedula}, ${
      this._especialidad
    }, ${this._nombre.getNombreCompleto()}, ${this._telefono}`;
  }
}