"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var clases;
(function (clases) {
    var animal = /** @class */ (function () {
        function animal(nombre, edad, cantidad_patas) {
            this._nombre = nombre;
            this._edad = edad;
            this._cantidad_patas = cantidad_patas;
        }
        return animal;
    }());
    clases.animal = animal;
})(clases || (clases = {}));
var clases;
(function (clases) {
    var mascota = /** @class */ (function (_super) {
        __extends(mascota, _super);
        function mascota(nombre, edad, cantidad_patas, id, tipo) {
            var _this = _super.call(this, nombre, edad, cantidad_patas) || this;
            _this._id = id;
            _this._tipo = tipo;
            return _this;
        }
        ;
        return mascota;
    }(clases.animal));
    clases.mascota = mascota;
})(clases || (clases = {}));
var clases;
(function (clases) {
    var tipo;
    (function (tipo) {
        tipo[tipo["perro"] = 0] = "perro";
        tipo[tipo["gato"] = 1] = "gato";
        tipo[tipo["reptil"] = 2] = "reptil";
        tipo[tipo["roedor"] = 3] = "roedor";
        tipo[tipo["ave"] = 4] = "ave";
        tipo[tipo["pez"] = 5] = "pez";
    })(tipo = clases.tipo || (clases.tipo = {}));
})(clases || (clases = {}));
/// <reference path="animales.ts"/>
/// <reference path="mascotas.ts"/>
/// <reference path="enum.ts"/>
var clases;
(function (clases) {
    var storage = localStorage;
    var mascota_1 = new clases.mascota("pinki", 3, 4, 1, clases.tipo.perro);
})(clases || (clases = {}));
