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
  constructor(fecha, hora, doctor, paciente) {
    this.fecha = fecha;
    this.hora = hora;
    this.doctor = doctor;
    this.paciente = paciente;
  }

  getCita() {
    return `${this.fecha.getFecha()}, ${this.hora.getFormato24()}, Dr. ${
      this.doctor.nombre.apellidoPaterno
    }, ${this.paciente.nombre.getNombreCompleto()}`;
  }
}
