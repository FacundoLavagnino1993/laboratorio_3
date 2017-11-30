
namespace clases {
    export class empleado extends persona{
        _id:number;
        _puesto:puesto;
        _foto:string;
        constructor(nombre:string,edad:number,dni:number,id:number,puesto:puesto,foto:string){
            super(nombre,edad,dni);
            this._id = id;
            this._puesto = puesto;
            this._foto = foto;
        };

    }    
}








