import { Mail } from './mail'
import { Direccion } from './direccion'
import { Telefono } from './telefono'

export class Persona {
  _nombre: string;
  _apellidos: string;
  _edad: number;
  _dni: string;
  _cumpleanyos: Date;
  _coloFavorito:  string;
  _sexo: string;
  _direcciones: Direccion[];
  _mails: Mail[];
  _telefonos: Telefono[];
  _notas: string;


  constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanyos: Date, coloFavorito:  string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string){
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._dni = dni;
    this._cumpleanyos = cumpleanyos;
    this._coloFavorito = coloFavorito;
    this._sexo = sexo;
    this._direcciones = direcciones;
    this._mails = mails;
    this._telefonos = telefonos;
    this._notas = notas

  }

  public get nombre(){
    return this._nombre;
  }

  public set nombre(nombre:string){
    this._nombre = nombre;
  }

  public get apellidos(){
    return this._apellidos;
  }

  public set apellidos(apellidos:string){
    this._apellidos = apellidos;
  }
  
  public get edad(){
    return this._edad;
  }

  public set edad(edad:number){
    this._edad = edad;
  }

  public get dni(){
    return this._dni;
  }

  public set dni(dni:string){
    this._dni = dni;
  }

  public get cumpleanyos(){
    return this._cumpleanyos;
  }

  public set cumpleanyos(cumpleanyos:Date){
    this._cumpleanyos = cumpleanyos;
  }

  public get coloFavorito(){
    return this._coloFavorito;
  }

  public set coloFavorito(coloFavorito:string){
    this._coloFavorito = coloFavorito;
  }

  public get sexo(){
    return this._sexo;
  }

  public set sexo(sexo:string){
    this._sexo = sexo;
  }

  public get direcciones(){
    return this._direcciones;
  }

  public addDireccion(direccion:Direccion){
    this._direcciones.push(direccion)
  }

  public get mails(){
    return this._mails;
  }

  public addMail(mail:Mail){
    this._mails.push(mail)
  }

  public get telefonos(){
    return this._telefonos;
  }

  public addTelefono(telefono:Telefono){
    this._telefonos.push(telefono)
  }

  public get notas(){
    return this._notas;
  }

  public set notas(notas:string){
    this._notas = notas
  }

  //public direccionesToString(): string{
   // let direccionesString: string = ""
    //this._direcciones.forEach(function (direccion) {
     // direccionesString += direccion.toString() +"\n";
    //});
   // return direccionesString;
  //}

  //public toString(): string {
   // let result: string = this.direccionesToString()
  //  return result
  //}
}