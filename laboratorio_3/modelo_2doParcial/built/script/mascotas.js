/// <reference path="animales.ts"/>
/// <reference path="enum.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mascota = (function (_super) {
    __extends(mascota, _super);
    function mascota(nombre, edad, cantidad_patas, id, tipo) {
        _super.call(this, nombre, edad, cantidad_patas);
        this._id = id;
        this._tipo = tipo;
    }
    ;
    return mascota;
})(animal);
