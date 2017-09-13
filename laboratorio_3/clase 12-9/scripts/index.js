(function(){
    console.warn("Leyendo...");
    function mifuncion(a,b){
        var resultado = a + b;
        if(a == 0){
            var resultado = "salsa";
        }
        return resultado;
    }
    console.log(mifuncion(0,2));

    var inc = (function(){
        var contador = 0;
        return function(){
            return contador++;
        }
    })()

    inc();
    inc();
    console.log(inc());

    window.onload = function(){
        document.getElementById("sumar").addEventListener("click",function(){
            var numUno = document.getElementById("numUno").value; 
            var numDos = document.getElementById("numDos").value;
            var resultado = parseInt(numUno) + parseInt(numDos);
            document.getElementById("resultado").innerHTML = "Resultado " + resultado;
        },false);
    }
        
    var auto = function(nafta){
        var _nafta = nafta;
        this.setNafta = function(value){
            _nafta = value;
        }
        this.getNafta = function(){
            return _nafta;
        }
    }

    var autoUno = new auto(100);
    console.log(autoUno.getNafta());            
  
    

})();



 

