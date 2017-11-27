/// <reference path="animales.ts"/>
/// <reference path="mascotas.ts"/>
/// <reference path="enum.ts"/>
namespace clases{
    let storage = localStorage;
    storage.clear();
    let tipos = tipo;
    let mascotas = new Array<mascota>();
    let data = [];
  

    window.onload = function getAnimales(){
        let mascota_1 = new mascota("pinki",3,4,1,tipo.perro);
        let mascota_2 = new mascota("pinki",2,4,2,tipo.gato);
        let mascota_3 = new mascota("topo",2,4,3,tipo.roedor);
        mascotas.push(mascota_1);
        mascotas.push(mascota_2);
        mascotas.push(mascota_3);
        storage.setItem('mascotas',JSON.stringify(mascotas));
        renderTable();
        document.getElementById('agregar').addEventListener('click',function(){
            console.log('agregar');
        });
        document.getElementById('modificar').addEventListener('click',function(){
            console.log('modificar');
        });

        let borrar = function(indice:number){
            console.log('borrar');
        }
    }
    
    let renderTable = function(){
        data = JSON.parse(storage.getItem('mascotas') || '[]');
        data.forEach(function(item, indice) {
            console.log(item);
            document.getElementById('animales').innerHTML += '<tr><td>'+item._id+'</td><td>'+item._nombre+'</td><td>'+item._edad+'</td><td>'+item._cantidad_patas+'</td><td>'+tipos[item._tipo]+'</td><td><button type="button" id="borrar" onClick="borrar('+indice+')">Borrar</button></td></tr>';
        }, this);
    }
    
    
    
}




