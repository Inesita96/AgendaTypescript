import { Persona } from './persona'
export class Agenda {
  _personas:Persona[]

  constructor(personas:Persona[]){
    this._personas = personas
  }

  public get personas(){
    return this._personas
  }

  public set personas(personas:Persona[]){
    this._personas = personas
  }

  public getPersonaByDni(dni:string): Persona {
    var result:Persona = this._personas[0];
    this._personas.forEach( function(persona){
      if(persona.dni == dni){
        result = persona ;
        return;
      }
    })
    return result;
  }

  public savePersona(newPersona:Persona) {
    let dni:string = newPersona.dni
    let oldPersona: Persona = this.getPersonaByDni(dni)
    const index = this._personas.indexOf(oldPersona, 0);
    if (index > -1) {
      this._personas.splice(index, 1);
    }
    this.personas.push(newPersona)
  }
}