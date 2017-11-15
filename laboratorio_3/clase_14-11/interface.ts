interface Xmen{
    nombre:string,
    peleasGanadas:number
}

function enviarMision(man:Xmen){
    console.log(man.nombre);
}

let men:Xmen 
men.nombre = "lolo";
men.peleasGanadas = 4;
enviarMision(men);

class xmen2 implements Xmen{
    public nombre: string;
    public peleasGanadas: number;
    
}

/*

Hacer ABM en LocalStorage(setItem,getItem,Clear) se guarda como string
Mostrar tabla de animales con los datos ID Nombre Edad Tipo Patas
Clase animal (abstracta)
atributo nombre
atributo edad
atributo cantidad de patas

******

Clase mascota hereda de animal
atributo id
enumerado tipo(perro, gato, reptil, roedor, ave, pez)
 ******

 Ambas entidades tienen metodo toJson, devulve string en formato Json de esa clase

****************
usar $filter $map $reduce

 Archivos separados app.ts animal.ts mascota.ts enum.ts
*/
