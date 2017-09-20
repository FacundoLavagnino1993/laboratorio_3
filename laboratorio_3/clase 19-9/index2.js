window.onload = function(){
    var xhr = new XMLHttpRequest();
   
    document.getElementById('enviar').addEventListener('click',()=>{
        var nombre = document.getElementById('nombre').value;
        var edad = document.getElementById('edad').value;
        xhr.onreadystatechange = gestionarRespuesta;
        xhr.open('GET','./pagina1.php?nombre='+nombre+'&edad='+edad, true);
        xhr.send();
    },false);

    function gestionarRespuesta(){
        var div = document.getElementById('contenedor');
        if(xhr.readyState == 4 && xhr.status == 200){
            div.innerHTML = xhr.responseText;
        }else if(xhr.status == 0){
            div.innerHTML = '<img src="5.gif" alt="Smiley face" height="42" width="42">'
        }else{
            div.innerHTML = 'Error: '+ xhr.status + xhr.statusText;
        }
    };

    
}


