"use strict";
function enviarMision(man) {
    console.log(man.nombre);
}
var men;
men.nombre = "lolo";
men.peleasGanadas = 4;
enviarMision(men);
var xmen2 = /** @class */ (function () {
    function xmen2() {
    }
    return xmen2;
}());
/*

Hacer ABM en LocalStorage(setItem,getItem,Clear) se guarda como string
Mostrar tabla de animales con los datos ID Nombre Edad Tipo Patas
Clase animal (abstracta)
atributo nombre
atributo edad
atributo cantidad de patas

******

Clase mascota hereda de animal
atributo id
enumerado tipo(perro, gato, reptil, roedor, ave, pez)
 ******

 Ambas entidades tienen metodo toJson, devulve string en formato Json de esa clase

****************
usar $filter $map $reduce

 Archivos separados app.ts animal.ts mascota.ts enum.ts
*/
