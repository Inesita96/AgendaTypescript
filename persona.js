"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanyos, coloFavorito, sexo, direcciones, mails, telefonos, notas) {
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
        this._notas = notas;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (apellidos) {
            this._apellidos = apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (dni) {
            this._dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumpleanyos", {
        get: function () {
            return this._cumpleanyos;
        },
        set: function (cumpleanyos) {
            this._cumpleanyos = cumpleanyos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "coloFavorito", {
        get: function () {
            return this._coloFavorito;
        },
        set: function (coloFavorito) {
            this._coloFavorito = coloFavorito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this._direcciones;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.addDireccion = function (direccion) {
        this._direcciones.push(direccion);
    };
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.addMail = function (mail) {
        this._mails.push(mail);
    };
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this._telefonos;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.addTelefono = function (telefono) {
        this._telefonos.push(telefono);
    };
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (notas) {
            this._notas = notas;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
exports.Persona = Persona;
