/// <reference path="animales.ts"/>
/// <reference path="mascotas.ts"/>
/// <reference path="enum.ts"/>

$(document).ready(function(){
    index.onInit();
    index.renderTable();
    document.getElementById("btn-mod").style.display = "none";
});

let mascotaStorage = localStorage;
let mascotas = new Array<clases.mascota>();
let mascota_1 = new clases.mascota("pinki",3,4,1,clases.tipo.perro);
let mascota_2 = new clases.mascota("ulises",2,4,2,clases.tipo.gato);
let mascota_3 = new clases.mascota("george",3,2,3,clases.tipo.ave);
let data = [];
let tipos = clases.tipo;
let id_update;

class index{
    public static onInit(){
        mascotas.push(mascota_1);
        mascotas.push(mascota_2);
        mascotas.push(mascota_3);
        mascotaStorage.setItem('mascotas',JSON.stringify(mascotas));
        data = JSON.parse(mascotaStorage.getItem('mascotas') || '[]');
    }

    public static renderTable(){
        data = JSON.parse(mascotaStorage.getItem('mascotas') || '[]');
        $("#animales").html('');
        data.forEach(function(item, indice) {
            document.getElementById('animales').innerHTML += '<tr><td>'+item._id+'</td><td>'+item._nombre+'</td><td>'+item._edad+'</td><td>'+item._cantidad_patas+'</td><td>'+tipos[item._tipo]+'</td><td><button type="button" class="borrar" onclick="index.borrar('+indice+')">Borrar</button><button id="modificar" type="button" onclick="index.modificar('+indice+')">Modificar</button></td></tr>';
        }, this); 
    }

    public static agregar(){
        let nombre = String($("#nombre").val());
        let edad = Number($("#edad").val());
        let tipo = <clases.tipo>($("#tipoMascota").val());
        let cantidad_patas = Number($("#patas").val());
        let id = Number(mascotas.length + 1);
        let add_mascota: clases.mascota = new clases.mascota(nombre,edad,cantidad_patas,id,tipo);
        mascotas.push(add_mascota);
        mascotaStorage.setItem('mascotas',JSON.stringify(mascotas));
        index.renderTable();
    };

    public static borrar(indice){
        mascotas.splice(indice,1);
        mascotaStorage.setItem('mascotas',JSON.stringify(mascotas));  
        index.renderTable(); 
    };

    public static modificar(indice){
        let mascota_modificable = mascotas.filter((mascota)=>{
            if(mascota._id == (indice + 1)){
               id_update = mascota._id; 
               String($("#nombre").val(mascota._nombre));
               Number($("#edad").val(mascota._edad));
               ($("#tipoMascota").val(mascota._tipo));
               Number($("#patas").val(mascota._cantidad_patas));
            }
        });
        document.getElementById("btn-add").style.display = "none";
        document.getElementById("btn-mod").style.display = "initial";
    };

    public static update(){
        let nombre = String($("#nombre").val());
        let edad = Number($("#edad").val());
        let tipo = <clases.tipo>($("#tipoMascota").val());
        let cantidad_patas = Number($("#patas").val());
        let mascota_update = new clases.mascota(nombre,edad,cantidad_patas,id_update,tipo);
        /*mascotas = mascotas.filter((mascota)=>{
            if(mascota._id == id_update){
                mascota._nombre = nombre;
                mascota._edad = edad;
                mascota._tipo = tipo;
                mascota._cantidad_patas = cantidad_patas;
                
            }
        });*/
        mascotas = mascotas.splice(id_update,0,mascota_update);

        document.getElementById("btn-mod").style.display = "none";  
        document.getElementById("btn-add").style.display = "initial";
        console.log(mascotas);
        mascotaStorage.setItem('mascotas',JSON.stringify(mascotas));
        index.renderTable();
         
    }
}



