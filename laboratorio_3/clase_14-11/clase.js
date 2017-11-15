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
var Advanger = /** @class */ (function () {
    function Advanger(peleas_ganadas, nombre_rival, nombre) {
        this._nombre = nombre;
        this.nombreRival = nombre_rival;
        this.peleasGanadas = peleas_ganadas;
    }
    ;
    Advanger.prototype.mostrar = function () {
        return this._nombre + ", " + this.nombreRival + ", " + this.peleasGanadas;
    };
    Object.defineProperty(Advanger.prototype, "getNombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Advanger.prototype, "setNombre", {
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Advanger;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(p, win, nr, n) {
        var _this = _super.call(this, win, nr, n) || this;
        _this._poder = p;
        return _this;
    }
    Xmen.prototype.mostrar = function () {
        return _super.prototype.mostrar.call(this) + ', ' + this._poder;
    };
    return Xmen;
}(Advanger));
var a1 = new Advanger(10, "Loky", "Ironman");
/*console.log(a1.mostrar());
a1.setNombre = "Lalo";
console.log(a1.getNombre);*/
var x1 = new Xmen("fuego", 10, "carlos", "Wolverin");
var array = new Array();
array.push(a1);
array.push(x1);
console.log(array);
console.log(x1.mostrar());
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Object.defineProperty(Apocalipsis, "Instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new Apocalipsis("HELL");
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return Apocalipsis;
}());
console.log(Apocalipsis.Instance);
