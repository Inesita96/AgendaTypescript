export class Mail {
  _tipo: string;
  _direccion: string;

  constructor(tipo: string, direccion: string){
    this._tipo = tipo;
    this._direccion = direccion;
  }

  public get tipo(){
    return this._tipo;
  }

  public set tipo(tipo:string){
    this._tipo = tipo;
  }

  public get direccion(){
    return this._direccion;
  }

  public set direccion(direccion:string){
    this._direccion = direccion;
  }
}