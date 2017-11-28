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
            document.getElementById('animales').innerHTML += '<tr><td class="item_id">'+item._id+'</td><td class="item_nombre">'+item._nombre+'</td><td class="item_edad">'+item._edad+'</td><td class="item_patas">'+item._cantidad_patas+'</td><td class="item_tipo">'+tipos[item._tipo]+'</td><td class="item_acciones"><button type="button" class="borrar btn btn-danger" onclick="index.borrar('+indice+')">Borrar</button><button id="modificar" type="button" class="btn btn-danger" onclick="index.modificar('+indice+')">Modificar</button></td></tr>';
        }, this); 
    }

    public static agregar(){
        let id = Number($("#id").val());
        let nombre = String($("#nombre").val());
        let edad = Number($("#edad").val());
        let tipo = <clases.tipo>($("#tipoMascota").val());
        let cantidad_patas = Number($("#patas").val());
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
        id_update = indice;
        for(let i = 0; i < mascotas.length; i++){
            if(i == indice){
                String($("#nombre").val(mascotas[i]._nombre));
                Number($("#id").val(mascotas[i]._id));
                Number($("#edad").val(mascotas[i]._edad));
                ($("#tipoMascota").val(mascotas[i]._tipo));
                Number($("#patas").val(mascotas[i]._cantidad_patas));
            }
        }
        document.getElementById("btn-add").style.display = "none";
        document.getElementById("btn-mod").style.display = "initial";
    };

    public static update(){
        let nombre = String($("#nombre").val());
        let id = Number($("#id").val());
        let edad = Number($("#edad").val());
        let tipo = <clases.tipo>($("#tipoMascota").val());
        let cantidad_patas = Number($("#patas").val());
        
        for(let i = 0; i < mascotas.length; i++){
            if(i == id_update){
                mascotas[i]._id = id;
                mascotas[i]._nombre = nombre;
                mascotas[i]._edad = edad;
                mascotas[i]._tipo = tipo;
                mascotas[i]._cantidad_patas = cantidad_patas;
            }
        }
       
        mascotaStorage.clear();
        document.getElementById("btn-mod").style.display = "none";  
        document.getElementById("btn-add").style.display = "initial";
        mascotaStorage.setItem('mascotas',JSON.stringify(mascotas));
        index.renderTable();
    }
    public static filtrar(){
        //console.log($("#filtroMascota").val());
        let value = Number($("#filtroMascota").val());
        let mascotas_filtradas = mascotas.filter((item)=>{
            if(value == 6){
                return mascotas;
            }else if(item._tipo == value && value < 6){
                return item;
            }
        })
        $("#animales").html('');
        console.log(mascotas_filtradas);
        if(mascotas_filtradas.length > 0){
            mascotas_filtradas.forEach(function(item, indice) {
                document.getElementById('animales').innerHTML += '<tr><td class="item_id">'+item._id+'</td><td class="item_nombre">'+item._nombre+'</td><td class="item_edad">'+item._edad+'</td><td class="item_patas">'+item._cantidad_patas+'</td><td class="item_tipo">'+tipos[item._tipo]+'</td><td class="item_acciones"><button type="button" class="borrar btn btn-danger" onclick="index.borrar('+indice+')">Borrar</button><button id="modificar" class="btn btn-danger" type="button" onclick="index.modificar('+indice+')">Modificar</button></td></tr>';
            }, this); 
        }else{
            document.getElementById('animales').innerHTML += '<div class="col-lg-12 col-md-12 not-found"><p>No hubo coincidencia!</p><img src="sad_icon.png" alt="not found"></div>'
        } 
    }

/*    public static ocultarId(){
        if($("#check_id").prop("checked")){
            $("#head_id").css("display","none");
            $(".item_id").css("display","none");
        }else{
            $("#head_id").css("display","block");
            $(".item_id").css("display","block");
        }
    }
    public static ocultarNombre(){
        if($("#check_nombre").prop("checked")){
            $("#head_nombre").css("display","none");
            $(".item_nombre").css("display","none");
        }else{
            $("#head_nombre").css("display","block");
            $(".item_nombre").css("display","block");
        }
    }
    public static ocultarEdad(){
        if($("#check_edad").prop("checked")){
            $("#head_edad").css("display","none");
            $(".item_edad").css("display","none");
        }else{
            $("#head_edad").css("display","block");
            $(".item_edad").css("display","block");
        }
    }
    public static ocultarTipo(){
        if($("#check_tipo").prop("checked")){
            $("#head_tipo").css("display","none");
            $(".item_tipo").css("display","none");
        }else{
            $("#head_tipo").css("display","block");
            $(".item_tipo").css("display","block");
        }
    }
    public static ocultarPatas(){
        if($("#check_patas").prop("checked")){
            $("#head_patas").css("display","none");
            $(".item_patas").css("display","none");
        }else{
            $("#head_patas").css("display","block");
            $(".item_patas").css("display","block");
        }
    }
    public static ocultarAcciones(){
        if($("#check_acciones").prop("checked")){
            $("#head_acciones").css("display","none");
            $(".item_acciones").css("display","none");
        }else{
            $("#head_acciones").css("display","block");
            $(".item_acciones").css("display","block");
        }
    }
*/
}



