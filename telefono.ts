export class Telefono {
  _tipo: string;
  _numero: string;

  constructor(tipo: string, numero: string){
    this._tipo = tipo;
    this._numero = numero;
  }

  public get tipo(){
    return this._tipo;
  }

  public set tipo(tipo:string){
    this._tipo = tipo;
  }

  public get numero(){
    return this._numero;
  }

  public set numero(numero:string){
    this._numero = numero;
  }
}