var animal = (function () {
    function animal(nombre, edad, cantidad_patas) {
        this._nombre = nombre;
        this._edad = edad;
        this._cantidad_patas = cantidad_patas;
    }
    return animal;
})();
