import Nombre from './nombre.js';
import Tiempo from './tiempo.js';
import Fecha from './fecha.js';
import Doctor from './doctor.js';
import Paciente from './paciente.js';
import Cita from './cita.js';
import Hospital from './hospital.js';
import Asegurado from './asegurado.js'

class Main {
  constructor() {
    this.tiempo1 = new Tiempo({ hora: 10, minuto: 25, periodo: 'am' });
    this.tiempo2 = new Tiempo({ hora: 10, minuto: 25, periodo: 'pm' });

    this.fecha = new Fecha(15, 6, 2005);

    this.nombre = new Nombre('Juan', 'Pérez', 'Díaz');
    this.nombre2 = new Nombre('María', 'Ramos', 'Ramírez');

    //this.paciente = new Paciente(this.nombre, this.fecha, 3123454367);
    let p_1 = {
      nombre: this.nombre,
      fechaNacimiento: this.fecha,
      telefono: 3123454367
    }
    this.paciente1 = new Paciente(p_1);
    let doc_1 = {
      nombre: this.nombre2,
      especialidad: 'cardiologo',
      telefono: 3121319198,
      cedula: 4543463
    }
    this.doctor = new Doctor(doc_1)
    //this.doctor = new Doctor(this.nombre2, 'Cardiólogo', 3125677896, 445566);

    let c_1 = {
      fecha: this.fecha,
      hora: this.tiempo1,
      doctor: this.doctor,
      paciente: this.paciente1
    } 
    this.cita = new Cita(c_1)
    //this.cita = new Cita(this.fecha, this.tiempo1, this.doctor, this.paciente1);

    let hos_1 = {
      nombre:'puerta de hierro',
      direccion: 'Av. Constitución 100'
    }
    this.hospital = new Hospital(hos_1)
    //this.hospital = new Hospital('Puerta de Hierro', 'Av. Constitución 100');
    let ase_1 = {
      nombre: new Nombre('dylan', 'toscano', 'villarrear'),
      fechaNacimiento: this.fecha,
      telefono: 3121319198,
      numeroPoliza: 32123213,
      finVigencia:new Fecha(22, 6, 2025) ,
      compañia: 'aseguradora tu alma'
      }
      this.asegurado1 = new Asegurado(ase_1)
  }
  probarAsegurados(){
    console.log(this.asegurado1.getPerfil())
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
    console.log(this.paciente1.getPerfil());
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
app.probarAsegurados();

/*app.probarTiempo();
app.probarFecha();
app.probarNombre();
app.probarPaciente();
app.probarDoctor();
app.probarCita();
app.probarHospital();*/
