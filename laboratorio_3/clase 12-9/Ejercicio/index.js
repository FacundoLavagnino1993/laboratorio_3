(function(){
    
    document.getElementById("enviar").addEventListener("click",function(){
        var nombre=document.getElementById("nombre").value;
        var apellido=document.getElementById("apellido").value;
        var tabla = document.getElementById("tabla").innerHTML;

        if(nombre == '' || apellido == ''){
            alert("Los campos son obligatorios");
            return;
        }else if(confirm("Quiere agregar el nombre y apellido a la lista?")){
            document.getElementById("tabla").innerHTML = tabla + "<tr><td>"+nombre+"</td><td>"+apellido+"</td></tr>";
            return; 
        }else{
            alert("Operacion cancelada!");
            return;
        }
               
    },false); 
})();