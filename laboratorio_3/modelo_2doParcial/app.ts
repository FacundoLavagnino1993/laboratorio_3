/// <reference path="personas.ts"/>
/// <reference path="empleados.ts"/>
/// <reference path="enum.ts"/>

$(document).ready(function(){
    //index.onInit();
   // index.renderTable();
   
 $(function() {
    $('#file-input').change(function(e) {
        addImage(e); 
       });
  
       function addImage(e){
        var file = e.target.files[0],
        imageType = /image.*/;
      
        if (!file.type.match(imageType))
         return;
    
        var reader = new FileReader();
        reader.onload = fileOnload;
        reader.readAsDataURL(file);
       }
    
       function fileOnload(e) {
        var result=e.target.result;
        $('#imgSalida').attr("src",result);
       }
      });
    
    document.getElementById("btn-mod").style.display = "none";
});

let empleadoStorage = localStorage;
let empleados = new Array<clases.empleado>();
let data = [];
let puestos = clases.puesto;
let id_update;
class index{
    public static onInit(){
       
        empleadoStorage.setItem('empleados',JSON.stringify(empleados));
        data = JSON.parse(empleadoStorage.getItem('empleados') || '[]');
    }

    public static renderTable(){
        data = JSON.parse(empleadoStorage.getItem('empleados') || '[]');
        $("#personas").html('');
        data.forEach(function(item, indice) {
            document.getElementById('personas').innerHTML += '<tr><td><img id="imgSalida" width="25%" height="25%" src="" /></td><td class="item_id">'+item._id+'</td><td class="item_nombre">'+item._nombre+'</td><td class="item_edad">'+item._edad+'</td><td class="item_dni">'+item._dni+'</td><td class="item_tipo">'+puestos[item._puesto]+'</td><td class="item_acciones"><button type="button" class="borrar btn btn-danger" onclick="index.borrar('+indice+')">Borrar</button><button id="modificar" type="button" class="btn btn-danger" onclick="index.modificar('+indice+')">Modificar</button></td></tr>';
        }, this); 
    }

    public static agregar(){

    
        let id = Number($("#id").val());
        let nombre = String($("#nombre").val());
        let edad = Number($("#edad").val());
        let puesto = <clases.puesto>($("#puestoEmpleado").val());
        let dni = Number($("#dni").val());
        let add_empleado: clases.empleado = new clases.empleado(nombre,edad,dni,id,puesto);
        empleados.push(add_empleado);
        empleadoStorage.setItem('empleados',JSON.stringify(empleados));
        index.renderTable();
    };

    public static borrar(indice){
        $("#filtroEmpleado").val(6);
        $("#promedios").val('');
        empleados.splice(indice,1);
        empleadoStorage.setItem('empleados',JSON.stringify(empleados));  
        index.renderTable(); 
    };

    public static modificar(indice){
        $("#filtroEmpleado").val(6);
        $("#promedios").val('');
        id_update = indice;
        for(let i = 0; i < empleados.length; i++){
            if(i == indice){
                String($("#nombre").val(empleados[i]._nombre));
                Number($("#id").val(empleados[i]._id));
                Number($("#edad").val(empleados[i]._edad));
                ($("#puestoEmpleado").val(empleados[i]._puesto));
                Number($("#dni").val(empleados[i]._dni));
            }
        }
        document.getElementById("btn-add").style.display = "none";
        document.getElementById("btn-mod").style.display = "initial";
    };

    public static update(){
        let nombre = String($("#nombre").val());
        let id = Number($("#id").val());
        let edad = Number($("#edad").val());
        let puesto = <clases.puesto>($("#puestoEmpleado").val());
        let dni = Number($("#dni").val());
        
        for(let i = 0; i < empleados.length; i++){
            if(i == id_update){
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
        empleadoStorage.setItem('empleados',JSON.stringify(empleados));
        index.renderTable();
    }
    public static filtrar(){
        $("#promedios").val('');
        let acum_promedio = 0;
        let cant_item = 0;
        let value = Number($("#filtroEmpleado").val());
        let empleados_filtradas = empleados.filter((item)=>{
            if(value == 6){
                return empleados;
            }else if(item._puesto == value){
                acum_promedio += item._edad;
                cant_item ++;
                index.promedio(acum_promedio,cant_item);
                return item;
            }
        })
        $("#personas").html('');
        if(empleados_filtradas.length > 0){
            empleados_filtradas.forEach(function(item, indice) {
                document.getElementById('personas').innerHTML += '<tr><td class="item_id">'+item._id+'</td><td class="item_nombre">'+item._nombre+'</td><td class="item_edad">'+item._edad+'</td><td class="item_dni">'+item._dni+'</td><td class="item_puesto">'+puestos[item._puesto]+'</td><td class="item_acciones"><button type="button" class="borrar btn btn-danger" onclick="index.borrar('+indice+')">Borrar</button><button id="modificar" class="btn btn-danger" type="button" onclick="index.modificar('+indice+')">Modificar</button></td></tr>';
            }, this); 
        }else{
            document.getElementById('personas').innerHTML += '<div class="col-lg-12 col-md-12 not-found"><p>No hubo coincidencia!</p><img src="sad_icon.png" alt="not found"></div>'
        } 
    }

    private static promedio(acum,cont){
        let promedio = acum / cont;
        $("#promedios").val(promedio + ' años.');
    }
    public static ocultarId(){
        if($("#check_id").prop("checked")){
            $("#head_id").css("display","none");
            $(".item_id").css("display","none");
        }else{
            $("#head_id").css("display","table-cell");
            $(".item_id").css("display","table-cell");
        }
    }
    public static ocultarNombre(){
        if($("#check_nombre").prop("checked")){
            $("#head_nombre").css("display","none");
            $(".item_nombre").css("display","none");
        }else{
            $("#head_nombre").css("display","table-cell");
            $(".item_nombre").css("display","table-cell");
        }
    }
    public static ocultarEdad(){
        if($("#check_edad").prop("checked")){
            $("#head_edad").css("display","none");
            $(".item_edad").css("display","none");
        }else{
            $("#head_edad").css("display","table-cell");
            $(".item_edad").css("display","table-cell");
        }
    }
    public static ocultarTipo(){
        if($("#check_tipo").prop("checked")){
            $("#head_tipo").css("display","none");
            $(".item_tipo").css("display","none");
        }else{
            $("#head_tipo").css("display","table-cell");
            $(".item_tipo").css("display","table-cell");
        }
    }
    public static ocultarPatas(){
        if($("#check_patas").prop("checked")){
            $("#head_patas").css("display","none");
            $(".item_patas").css("display","none");
        }else{
            $("#head_patas").css("display","table-cell");
            $(".item_patas").css("display","table-cell");
        }
    }
    public static ocultarAcciones(){
        if($("#check_acciones").prop("checked")){
            $("#head_acciones").css("display","none");
            $(".item_acciones").css("display","none");
        }else{
            $("#head_acciones").css("display","table-cell");
            $(".item_acciones").css("display","table-cell");
        }
    }
    
       
      
           
        
}



