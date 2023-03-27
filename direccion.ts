export class Direccion {
  _calle: string;
  _numero: number;
  _piso: number;
  _letra: string;
  _cp: number;
  _poblacion:  string;
  _provincia: string;

  constructor(calle: string, numero: number, piso: number, letra: string, cp: number, poblacion:  string, provincia: string){
    this._calle = calle;
    this._numero = numero;
    this._piso = piso;
    this._letra = letra;
    this._cp = cp;
    this._poblacion = poblacion;
    this._provincia = provincia;
  }

  public get calle(){
    return this._calle;
  }

  public set calle(calle:string){
    this._calle = calle;
  }

  public get numero(){
    return this._numero;
  }

  public set numero(numero:number){
    this._numero = numero;
  }
  
  public get piso(){
    return this._piso;
  }

  public set piso(piso:number){
    this._piso = piso;
  }

  public get letra(){
    return this._letra;
  }

  public set letra(letra:string){
    this._letra = letra;
  }

  public get cp(){
    return this._cp;
  }

  public set cp(cp:number){
    this._cp = cp;
  }

  public get poblacion(){
    return this._poblacion;
  }

  public set poblacion(poblacion:string){
    this._poblacion = poblacion;
  }

  public get provincia(){
    return this._provincia;
  }

  public set provincia(provincia:string){
    this._provincia = provincia;
  }
}