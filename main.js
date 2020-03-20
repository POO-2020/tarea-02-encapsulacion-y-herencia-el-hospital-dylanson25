import Nombre from './Nombre.js';
import Tiempo from './tiempo.js';
import Fecha from './fecha.js';
import Doctor from './doctor.js';
import Paciente from './paciente.js';
import Cita from './cita.js';
import Hospital from './hospital.js';

class Main {
  constructor() {
    this.tiempo1 = new Tiempo({ hora: 10, minuto: 25, periodo: 'am' });
    this.tiempo2 = new Tiempo({ hora: 10, minuto: 25, periodo: 'pm' });

    this.fecha = new Fecha(15, 6, 2005);

    this.nombre = new Nombre('Juan', 'Pérez', 'Díaz');
    this.nombre2 = new Nombre('María', 'Ramos', 'Ramírez');

    this.paciente = new Paciente(this.nombre, this.fecha, 3123454367);

    this.doctor = new Doctor(this.nombre2, 'Cardiólogo', 3125677896, 445566);

    this.cita = new Cita(this.fecha, this.tiempo1, this.doctor, this.paciente);

    this.hospital = new Hospital('Puerta de Hierro', 'Av. Constitución 100');
  }

  probarTiempo() {
    console.log(this.tiempo1.getFormato12());
    console.log(this.tiempo2.getFormato12());
    console.log(this.tiempo1.getFormato24());
    console.log(this.tiempo2.getFormato24());
  }

  probarFecha() {
    console.log(this.fecha.getAños());
    console.log(this.fecha.getMeses());
    console.log(this.fecha.getSemanas());
    console.log(this.fecha.getDias());
    console.log(this.fecha.getFecha());
    console.log(this.fecha.getDiaFecha());
  }

  probarNombre() {
    console.log(this.nombre.getNombreCompleto());
    console.log(this.nombre.getApellidoNombre());
    console.log(this.nombre.getIniciales());
  }

  probarPaciente() {
    console.log(this.paciente.getPerfil());
  }

  probarDoctor() {
    console.log(this.doctor.getPerfil());
  }

  probarCita() {
    console.log(this.cita.getCita());
  }

  probarHospital() {
    this.hospital.registrarDoctor(this.doctor);
    this.hospital.registrarCita(this.cita);
    this.hospital.listarDoctores();
    this.hospital.listarCitas();
  }
}
let app = new Main();

app.probarTiempo();
app.probarFecha();
app.probarNombre();
app.probarPaciente();
app.probarDoctor();
app.probarCita();
app.probarHospital();
