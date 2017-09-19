window.onload = function(){
    var xhr = new XMLHttpRequest();
    document.getElementById('read').addEventListener('click',()=>{
        xhr.onreadystatechange = gestionarRespuesta;
        xhr.open('GET','./prueb.txt', true);
        xhr.send();
    },false);

    function gestionarRespuesta(){
        var div = document.getElementById('contenedor');
        if(xhr.readyState == 4 && xhr.status == 200){
            div.innerHTML = xhr.responseText;
        }else{
            div.innerHTML = 'Error: '+ xhr.status + xhr.statusText;
        }
    };

    
}


