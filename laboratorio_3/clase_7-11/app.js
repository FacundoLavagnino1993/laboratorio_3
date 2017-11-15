"use strict";
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
var use = "x";
document.body.innerHTML = greeter(user);
var cosas;
(function (cosas) {
    cosas[cosas["cosa1"] = 0] = "cosa1";
    cosas[cosas["cosa2"] = 1] = "cosa2";
})(cosas || (cosas = {}));
// tsc "archivo" traspila el archivo seleccionado a js
// tsc -init traspila todo el proyecto a js
// tsc -w agrega watch para traspilar automaticamente, con ctrl+c salimos del w
// federico tomadin - Github 
