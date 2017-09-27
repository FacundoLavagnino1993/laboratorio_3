var xhr = new XMLHttpRequest();
var domain = 'http://localhost:3000';

window.onload = function(){
    getPersonas();
}

function renderTable(personas){
    if(personas.length>0){
        for(var i=0;i<personas.length;i++){
            document.getElementById('personas').innerHTML += '<tr><td>'+personas[i].nombre+'</td><td>'+personas[i].apellido+'</td><td><button id="borrar" onClick="borrar()">Borrar</button><button id="modificar" onClick="modificar()">Modificar</button></td></tr>';
            btnBorrar = document.getElementById('borrar');
            btnModificar = document.getElementById('modificar');
        }
    }else{
        document.getElementById('personas').innerHTML += 'Empty table';
    }
}


function getPersonas(){   
    xhr.open('GET',domain + '/traerpersonas',true);   
    xhr.onreadystatechange = () => {
        if(xhr.status == 200 && xhr.readyState == 4){
            var personas = JSON.parse(xhr.responseText);
            renderTable(personas);         
        }else{
            return;
        }
    }
    xhr.send();
}
document.getElementById('agregar').addEventListener('click',function(){
    var name = document.getElementById('nombre').value;
    var subname = document.getElementById('apellido').value;
    var data = "nombre " + encodeURIComponent(nombre) + "apellido " + encodeURIComponent(apellido);
    console.log(data);
    xhr.open('POST',domain + '/agregarpersona',true);
    xhr.onreadystatechange = () => {
        if(xhr.status == 200 && xhr.readyState == 4){
            console.log(xhr.responseText);     
        }else{
            return;
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify({nombre:name, apellido:subname}));
});

function borrar(){
    alert('borrar');
}

function modificar(){
    alert('modificar');
}

