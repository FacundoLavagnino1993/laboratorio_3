namespace clases{
    export abstract class persona{
         _nombre:string;
         _edad:number;
         _dni:number;
        
        constructor(nombre:string,edad:number,dni:number){
             this._nombre = nombre;
             this._edad = edad;
             this._dni = dni;
           
        }
     }
}


