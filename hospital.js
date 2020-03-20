import Fecha from './fecha.js';
import Tiempo from './Tiempo.js';
import Nombre from './Nombre.js';
import Paciente from './paciente.js';
import Doctor from './doctor.js';
import Cita from './cita.js';
export default class Hospital {
  /**
   *
   * @param {string} nombre
   * @param {string} direccion
   */
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.doctores = new Array();
    this.citas = new Array();
  }

  registrarDoctor(doctor) {
    this.doctores.push(doctor);
  }

  listarDoctores() {
    this.doctores.forEach((doctor, i) => {
      console.log(`${i + 1} ${doctor.getPerfil()}`);
    });
  }

  registrarCita(cita) {
    this.citas.push(cita);
  }

  listarCitas() {
    this.citas.forEach((cita, i) => {
      console.log(`${i + 1} ${cita.getCita()}`);
    });
  }
}
