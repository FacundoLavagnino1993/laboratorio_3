var clases;
(function (clases) {
    class animal {
        constructor(nombre, edad, cantidad_patas) {
            this._nombre = nombre;
            this._edad = edad;
            this._cantidad_patas = cantidad_patas;
        }
    }
    clases.animal = animal;
})(clases || (clases = {}));
var clases;
(function (clases) {
    class mascota extends clases.animal {
        constructor(nombre, edad, cantidad_patas, id, tipo) {
            super(nombre, edad, cantidad_patas);
            this._id = id;
            this._tipo = tipo;
        }
        ;
    }
    clases.mascota = mascota;
})(clases || (clases = {}));
var clases;
(function (clases) {
    (function (tipo) {
        tipo[tipo["perro"] = 0] = "perro";
        tipo[tipo["gato"] = 1] = "gato";
        tipo[tipo["reptil"] = 2] = "reptil";
        tipo[tipo["roedor"] = 3] = "roedor";
        tipo[tipo["ave"] = 4] = "ave";
        tipo[tipo["pez"] = 5] = "pez";
    })(clases.tipo || (clases.tipo = {}));
    var tipo = clases.tipo;
})(clases || (clases = {}));
/// <reference path="animales.ts"/>
/// <reference path="mascotas.ts"/>
/// <reference path="enum.ts"/>
var clases;
(function (clases) {
    let storage = localStorage;
    storage.clear();
    let tipos = clases.tipo;
    let mascotas = new Array();
    let data = [];
    window.onload = function getAnimales() {
        let mascota_1 = new clases.mascota("pinki", 3, 4, 1, clases.tipo.perro);
        let mascota_2 = new clases.mascota("pinki", 2, 4, 2, clases.tipo.gato);
        let mascota_3 = new clases.mascota("topo", 2, 4, 3, clases.tipo.roedor);
        mascotas.push(mascota_1);
        mascotas.push(mascota_2);
        mascotas.push(mascota_3);
        storage.setItem('mascotas', JSON.stringify(mascotas));
        renderTable();
        document.getElementById('agregar').addEventListener('click', function () {
            console.log('agregar');
        });
        document.getElementById('modificar').addEventListener('click', function () {
            console.log('modificar');
        });
        let borrar = function (indice) {
            console.log('borrar');
        };
    };
    let renderTable = function () {
        data = JSON.parse(storage.getItem('mascotas') || '[]');
        data.forEach(function (item, indice) {
            console.log(item);
            document.getElementById('animales').innerHTML += '<tr><td>' + item._id + '</td><td>' + item._nombre + '</td><td>' + item._edad + '</td><td>' + item._cantidad_patas + '</td><td>' + tipos[item._tipo] + '</td><td><button type="button" id="borrar" onClick="borrar(' + indice + ')">Borrar</button></td></tr>';
        }, this);
    };
})(clases || (clases = {}));
