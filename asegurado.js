import Paciente from './paciente.js'
export default class Asegurado extends Paciente{
    constructor({nombre, fechaNacimiento, telefono, numeroPoliza, finVigencia, compañia}){
        super({nombre, fechaNacimiento, telefono})
        this._numeroPoliza = numeroPoliza
        this._finVigencia = finVigencia
        this._compañia = compañia 
    }
    getPerfil(){
        return`
        ${this._nombre.getNombreCompleto()}, 
        ${this._fechaNacimiento.getFecha()}, 
        ${this._telefono}, 
        ${this._numeroPoliza}, 
        ${this._finVigencia.getFecha()},
        ${this._compañia}`
    }
}
/**
 vigencia de la poliza,
  compañía aseguradora. 
  por ejemplo:
Juan Pérez González, 1/Feb/2020, 312-345-5667, 112233, 04/May/2022, Seguros Axa
 */