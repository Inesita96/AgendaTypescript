"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var direccion_1 = require("./direccion");
var persona_1 = require("./persona");
var agenda_1 = require("./agenda");
var mailSyl = new mail_1.Mail('Personal', 'syl@gmail.com');
var telefonoSyl = new telefono_1.Telefono('movil', '789658854');
var direccionSyl = new direccion_1.Direccion('Mariano Carderera', 12, 1, "M", 50017, "Zaragoza", "Zaragoza");
var syl = new persona_1.Persona("Syl", "Sebán Morsa", 8, "58479245S", new Date('2022-08-01'), "Negro", "F", [direccionSyl], [mailSyl], [telefonoSyl], "Wah Wah Miau Purrrrr");
var mailAlex = new mail_1.Mail('Personal', 'alex@gmail.com');
var telefonoAlex = new telefono_1.Telefono('movil', '6256256256');
var telefonoFijoAlex = new telefono_1.Telefono('fijo', '985985985');
var direccionAlex = new direccion_1.Direccion('Mariano Carderera', 12, 1, "M", 50017, "Zaragoza", "Zaragoza");
var alex = new persona_1.Persona("Alex", "Sebán Morsa", 8, "456456456S", new Date('2022-08-01'), "Negro", "F", [direccionAlex], [mailAlex], [telefonoAlex, telefonoFijoAlex], "Wah Wah Miau Purrrrr");
var mailInes = new mail_1.Mail('Personal', 'ines@gmail.com');
var mailCorporativoInes = new mail_1.Mail('Corporativo', 'coporatines@gmail.com');
var telefonoInes = new telefono_1.Telefono('movil', '658658658');
var telefonoFijoInes = new telefono_1.Telefono('fijo', '976976976');
var direccionInes = new direccion_1.Direccion('Mariano Carderera', 12, 1, "M", 50017, "Zaragoza", "Zaragoza");
var ines = new persona_1.Persona("Ines", "Sebán Morsa", 8, "123123123S", new Date('2022-08-01'), "Negro", "F", [direccionInes], [mailInes, mailCorporativoInes], [telefonoInes, telefonoFijoInes], "Wah Wah Miau Purrrrr");
var agenda = new agenda_1.Agenda([syl, alex, ines]);
console.log("++++++++++++++++PERSONAS");
console.log(syl);
console.log(alex);
console.log(ines);
console.log("++++++++++++++++BUSCANDO A SYL");
var alexPorDni = agenda.getPersonaByDni("456456456S");
alexPorDni.addDireccion(new direccion_1.Direccion('avenida primado reig', 189, 12, "", 46020, "Valencia", "Valencia"));
alexPorDni.addMail(new mail_1.Mail('Corporativo', 'corporalex@gmail.com'));
alexPorDni.addTelefono(new telefono_1.Telefono('Empresa', '+54 789456123'));
agenda.savePersona(alexPorDni);
console.log(agenda.getPersonaByDni(syl.dni));
console.log(agenda.getPersonaByDni(alexPorDni.dni));
console.log(agenda.getPersonaByDni(ines.dni));