"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
var Agenda = /** @class */ (function () {
    function Agenda(personas) {
        this._personas = personas;
    }
    Object.defineProperty(Agenda.prototype, "personas", {
        get: function () {
            return this._personas;
        },
        set: function (personas) {
            this._personas = personas;
        },
        enumerable: false,
        configurable: true
    });
    Agenda.prototype.getPersonaByDni = function (dni) {
        var result = this._personas[0];
        this._personas.forEach(function (persona) {
            if (persona.dni == dni) {
                result = persona;
                return;
            }
        });
        return result;
    };
    Agenda.prototype.savePersona = function (newPersona) {
        var dni = newPersona.dni;
        var oldPersona = this.getPersonaByDni(dni);
        var index = this._personas.indexOf(oldPersona, 0);
        if (index > -1) {
            this._personas.splice(index, 1);
        }
        this.personas.push(newPersona);
    };
    return Agenda;
}());
exports.Agenda = Agenda;
