
namespace clases {
    export class mascota extends animal{
        _id:number;
         _tipo:tipo;
        constructor(nombre:string,edad:number,cantidad_patas:number,id:number,tipo:tipo){
            super(nombre,edad,cantidad_patas);
            this._id = id;
            this._tipo = tipo;
        };

    }    
}








