import { Mail } from './mail'
import { Telefono } from './telefono'
import { Direccion } from './direccion'
import { Persona } from './persona'
import { Agenda } from './agenda'

let mailSyl: Mail = new Mail('Personal', 'syl@gmail.com')
let telefonoSyl: Telefono = new Telefono('movil', '789658854')
let direccionSyl: Direccion = new Direccion('Mariano Carderera', 12, 1, "M", 50017, "Zaragoza", "Zaragoza")

let syl: Persona = new Persona("Syl", "Sebán Morsa", 8, "58479245S", new Date('2022-08-01'), "Negro", "F", [direccionSyl], [mailSyl], [telefonoSyl], "Wah Wah Miau Purrrrr")

let mailAlex: Mail = new Mail('Personal', 'alex@gmail.com')
let telefonoAlex: Telefono = new Telefono('movil', '6256256256')
let telefonoFijoAlex: Telefono = new Telefono('fijo', '985985985')
let direccionAlex: Direccion = new Direccion('Mariano Carderera', 12, 1, "M", 50017, "Zaragoza", "Zaragoza")

let alex: Persona = new Persona("Alex", "Sebán Morsa", 8, "456456456S", new Date('2022-08-01'), "Negro", "F", [direccionAlex], [mailAlex], [telefonoAlex, telefonoFijoAlex], "Wah Wah Miau Purrrrr")

let mailInes: Mail = new Mail('Personal', 'ines@gmail.com')
let mailCorporativoInes: Mail = new Mail('Corporativo', 'coporatines@gmail.com')
let telefonoInes: Telefono = new Telefono('movil', '658658658')
let telefonoFijoInes: Telefono = new Telefono('fijo', '976976976')
let direccionInes: Direccion = new Direccion('Mariano Carderera', 12, 1, "M", 50017, "Zaragoza", "Zaragoza")

let ines: Persona = new Persona("Ines", "Sebán Morsa", 8, "123123123S", new Date('2022-08-01'), "Negro", "F", [direccionInes], [mailInes, mailCorporativoInes], [telefonoInes, telefonoFijoInes], "Wah Wah Miau Purrrrr")

let agenda: Agenda = new Agenda([syl, alex, ines])

console.log("++++++++++++++++PERSONAS")
console.log(syl)
console.log(alex)
console.log(ines)

console.log("++++++++++++++++BUSCANDO A SYL")
let alexPorDni:Persona = agenda.getPersonaByDni("456456456S")
alexPorDni.addDireccion(new Direccion('avenida primado reig', 189, 12, "", 46020, "Valencia", "Valencia"))
alexPorDni.addMail(new Mail('Corporativo', 'corporalex@gmail.com'))
alexPorDni.addTelefono(new Telefono('Empresa', '+54 789456123'))

agenda.savePersona(alexPorDni)

console.log(agenda.getPersonaByDni(syl.dni))
console.log(agenda.getPersonaByDni(alexPorDni.dni))
console.log(agenda.getPersonaByDni(ines.dni))

