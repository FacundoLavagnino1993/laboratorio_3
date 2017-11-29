
namespace clases {
    export class empleado extends persona{
        _id:number;
         _puesto:puesto;
        constructor(nombre:string,edad:number,dni:number,id:number,puesto:puesto){
            super(nombre,edad,dni);
            this._id = id;
            this._puesto = puesto;
        };

    }    
}








