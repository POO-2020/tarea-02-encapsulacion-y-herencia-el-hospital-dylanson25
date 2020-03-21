import Fecha from './fecha.js';
import Tiempo from './Tiempo.js';
import Doctor from './doctor.js';
import Paciente from './paciente.js';
export default class cita {
  /**
   *
   * @param {Fecha} fecha
   * @param {Tiempo} hora
   * @param {Doctor} doctor
   * @param {Paciente} paciente
   */
  constructor({fecha, hora, doctor, paciente}) {
    this._fecha = fecha;
    this._hora = hora;
    this._doctor = doctor;
    this._paciente = paciente;
  }

  getCita() {
    return `${this._fecha.getFecha()}, ${this._hora.getFormato24()}, Dr. ${
      this._doctor.getNombreDoctor()}, 
      ${this._paciente.getNombrePaciente()}`;
  }
}