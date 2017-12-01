var clases;
(function (clases) {
    class persona {
        constructor(nombre, edad, dni) {
            this._nombre = nombre;
            this._edad = edad;
            this._dni = dni;
        }
    }
    clases.persona = persona;
})(clases || (clases = {}));
var clases;
(function (clases) {
    class empleado extends clases.persona {
        constructor(nombre, edad, dni, id, puesto, foto) {
            super(nombre, edad, dni);
            this._id = id;
            this._puesto = puesto;
            this._foto = foto;
        }
        ;
    }
    clases.empleado = empleado;
})(clases || (clases = {}));
var clases;
(function (clases) {
    let puesto;
    (function (puesto) {
        puesto[puesto["desarrollador_front"] = 0] = "desarrollador_front";
        puesto[puesto["desarrollador_back"] = 1] = "desarrollador_back";
        puesto[puesto["analista"] = 2] = "analista";
        puesto[puesto["QA"] = 3] = "QA";
        puesto[puesto["team"] = 4] = "team";
        puesto[puesto["dise\u00F1ador"] = 5] = "dise\u00F1ador";
    })(puesto = clases.puesto || (clases.puesto = {}));
})(clases || (clases = {}));
/// <reference path="personas.ts"/>
/// <reference path="empleados.ts"/>
/// <reference path="enum.ts"/>
$(document).ready(function () {
    // index.renderTable();
    document.getElementById("btn-mod").style.display = "none";
});
let empleadoStorage = localStorage;
let empleados = new Array();
let data = [];
let puestos = clases.puesto;
let id_update;
let imgBase64;
(function () {
    let input = document.querySelector('#foto');
    input.addEventListener('click', function (e) {
        let archivo = input.files[0];
        let reader = new FileReader();
        let urlBase64;
        reader.onload = function () {
            urlBase64 = reader.result;
        };
        reader.readAsDataURL(archivo);
    }, false);
});
class index {
    static renderTable() {
        data = JSON.parse(empleadoStorage.getItem('empleados') || '[]');
        $("#personas").html('');
        data.forEach(function (item, indice) {
            document.getElementById('personas').innerHTML += '<tr><td><img id="imgSalida" width="25%" height="25%" class="item_foto" src=' + item._foto + ' /></td><td class="item_id">' + item._id + '</td><td class="item_nombre">' + item._nombre + '</td><td class="item_edad">' + item._edad + '</td><td class="item_dni">' + item._dni + '</td><td class="item_puesto">' + puestos[item._puesto] + '</td><td class="item_acciones"><button type="button" class="borrar btn btn-danger" onclick="index.borrar(' + indice + ')">Borrar</button><button id="modificar" type="button" class="btn btn-danger" onclick="index.modificar(' + indice + ')">Modificar</button></td></tr>';
        }, this);
        index.limpiar();
    }
    static agregar() {
        let foto = imgBase64;
        let id = Number($("#id").val());
        let nombre = String($("#nombre").val());
        let edad = Number($("#edad").val());
        let puesto = ($("#puestoEmpleado").val());
        let dni = Number($("#dni").val());
        let add_empleado = new clases.empleado(nombre, edad, dni, id, puesto, foto);
        empleados.push(add_empleado);
        empleadoStorage.setItem('empleados', JSON.stringify(empleados));
        index.renderTable();
    }
    ;
    static borrar(indice) {
        $("#filtroEmpleado").val(6);
        $("#promedios").val('');
        empleados.splice(indice, 1);
        empleadoStorage.setItem('empleados', JSON.stringify(empleados));
        index.renderTable();
    }
    ;
    static modificar(indice) {
        $("#filtroEmpleado").val(6);
        $("#promedios").val('');
        id_update = indice;
        for (let i = 0; i < empleados.length; i++) {
            if (i == indice) {
                String($("#nombre").val(empleados[i]._nombre));
                Number($("#id").val(empleados[i]._id));
                Number($("#edad").val(empleados[i]._edad));
                ($("#puestoEmpleado").val(empleados[i]._puesto));
                Number($("#dni").val(empleados[i]._dni));
            }
        }
        document.getElementById("btn-add").style.display = "none";
        document.getElementById("btn-mod").style.display = "initial";
    }
    ;
    static update() {
        let nombre = String($("#nombre").val());
        let id = Number($("#id").val());
        let edad = Number($("#edad").val());
        let puesto = ($("#puestoEmpleado").val());
        let dni = Number($("#dni").val());
        let foto = imgBase64;
        for (let i = 0; i < empleados.length; i++) {
            if (i == id_update) {
                empleados[i]._foto = foto;
                empleados[i]._id = id;
                empleados[i]._nombre = nombre;
                empleados[i]._edad = edad;
                empleados[i]._puesto = puesto;
                empleados[i]._dni = dni;
            }
        }
        empleadoStorage.clear();
        document.getElementById("btn-mod").style.display = "none";
        document.getElementById("btn-add").style.display = "initial";
        empleadoStorage.setItem('empleados', JSON.stringify(empleados));
        index.renderTable();
    }
    static filtrar() {
        $("#promedios").val('');
        let acum_promedio = 0;
        let cant_item = 0;
        let value = Number($("#filtroEmpleado").val());
        let empleados_filtradas = empleados.filter((item) => {
            if (value == 6) {
                return empleados;
            }
            else if (item._puesto == value) {
                acum_promedio += item._edad;
                cant_item++;
                index.promedio(acum_promedio, cant_item);
                return item;
            }
        });
        $("#personas").html('');
        if (empleados_filtradas.length > 0) {
            empleados_filtradas.forEach(function (item, indice) {
                document.getElementById('personas').innerHTML += '<tr><td><img id="imgSalida" class="item_foto" width="25%" height="25%" src=' + item._foto + ' /></td><td class="item_id">' + item._id + '</td><td class="item_nombre">' + item._nombre + '</td><td class="item_edad">' + item._edad + '</td><td class="item_dni">' + item._dni + '</td><td class="item_puesto">' + puestos[item._puesto] + '</td><td class="item_acciones"><button type="button" class="borrar btn btn-danger" onclick="index.borrar(' + indice + ')">Borrar</button><button id="modificar" class="btn btn-danger" type="button" onclick="index.modificar(' + indice + ')">Modificar</button></td></tr>';
            }, this);
        }
        else {
            document.getElementById('personas').innerHTML += '<div class="col-lg-12 col-md-12 not-found"><p>No hubo coincidencia!</p><img src="sad_icon.png" alt="not found"></div>';
        }
    }
    static promedio(acum, cont) {
        let promedio = acum / cont;
        $("#promedios").val(promedio + ' años.');
    }
    static ocultarFoto() {
        if ($("#check_foto").prop("checked")) {
            $("#head_foto").css("display", "none");
            $(".item_foto").css("display", "none");
        }
        else {
            $("#head_foto").css("display", "table-cell");
            $(".item_foto").css("display", "table-cell");
        }
    }
    static ocultarId() {
        if ($("#check_id").prop("checked")) {
            $("#head_id").css("display", "none");
            $(".item_id").css("display", "none");
        }
        else {
            $("#head_id").css("display", "table-cell");
            $(".item_id").css("display", "table-cell");
        }
    }
    static ocultarNombre() {
        if ($("#check_nombre").prop("checked")) {
            $("#head_nombre").css("display", "none");
            $(".item_nombre").css("display", "none");
        }
        else {
            $("#head_nombre").css("display", "table-cell");
            $(".item_nombre").css("display", "table-cell");
        }
    }
    static ocultarEdad() {
        if ($("#check_edad").prop("checked")) {
            $("#head_edad").css("display", "none");
            $(".item_edad").css("display", "none");
        }
        else {
            $("#head_edad").css("display", "table-cell");
            $(".item_edad").css("display", "table-cell");
        }
    }
    static ocultarPuesto() {
        if ($("#check_tipo").prop("checked")) {
            $("#head_puesto").css("display", "none");
            $(".item_puesto").css("display", "none");
        }
        else {
            $("#head_puesto").css("display", "table-cell");
            $(".item_puesto").css("display", "table-cell");
        }
    }
    static ocultarDni() {
        if ($("#check_patas").prop("checked")) {
            $("#head_dni").css("display", "none");
            $(".item_dni").css("display", "none");
        }
        else {
            $("#head_dni").css("display", "table-cell");
            $(".item_dni").css("display", "table-cell");
        }
    }
    static ocultarAcciones() {
        if ($("#check_acciones").prop("checked")) {
            $("#head_acciones").css("display", "none");
            $(".item_acciones").css("display", "none");
        }
        else {
            $("#head_acciones").css("display", "table-cell");
            $(".item_acciones").css("display", "table-cell");
        }
    }
    /*    private static convertBase64(img){
            console.log(img);
            var canvas = document.createElement("canvas");
            
            canvas.width = img.width;
            canvas.height = img.height;
            console.log(canvas);
           // var ctx = canvas.getContext("2d");
           // ctx.drawImage(img, 0, 0);
        
            var dataURL = canvas.toDataURL("image/png");
        
            return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        }*/
    static salvarImagen(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                imgBase64 = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    static limpiar() {
        String($("#nombre").val(''));
        Number($("#id").val(''));
        Number($("#edad").val(''));
        ($("#puestoEmpleado").val(''));
        Number($("#dni").val(''));
    }
}
