namespace clases{
    export abstract class animal{
        private _nombre:string;
        private _edad:number;
        private _cantidad_patas:number;
     
        constructor(nombre:string,edad:number,cantidad_patas:number){
             this._nombre = nombre;
             this._edad = edad;
             this._cantidad_patas = cantidad_patas;
        }
     }
}


