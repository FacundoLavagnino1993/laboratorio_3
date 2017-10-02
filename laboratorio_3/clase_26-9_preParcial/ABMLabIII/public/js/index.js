var xhr = new XMLHttpRequest();
var domain = 'http://localhost:3000';


window.onload = function(){
    getPersonas();
}

function renderTable(personas){
    var index = 0;   
    personas.forEach(function(item) {
        document.getElementById('personas').innerHTML += '<tr><td>'+item.nombre+'</td><td>'+item.apellido+'</td><td><button id="borrar" onClick="borrar()">Borrar</button><button id="modificar" onClick="modificar()">Modificar</button></td></tr>';
    }, this);
    
}


function getPersonas(){
    document.getElementById('personas').innerHTML = '';   
    xhr.open('GET',domain + '/traerpersonas',true);   
    xhr.onreadystatechange = () => {
        if(xhr.status == 200 && xhr.readyState == 4){
            personas = JSON.parse(xhr.responseText);
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
    var data = 'nombre='+encodeURIComponent(name)+'&apellido='+encodeURIComponent(subname);
    xhr.open('POST',domain + '/agregarpersona',true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = () => {
        if(xhr.status == 200 && xhr.readyState == 4){
            console.log(xhr.responseText);    
            getPersonas(); 
        }else{
            return;
        }
    }
    xhr.send(data);
});


function borrar(personas){

    console.log(personas);
}

function modificar(index){
    alert(index);
}

