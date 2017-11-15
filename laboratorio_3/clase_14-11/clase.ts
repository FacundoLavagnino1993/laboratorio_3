class Advanger{
    private _nombre : String;
    nombreRival : String;
    peleasGanadas : Number;
    constructor(peleas_ganadas:Number,nombre_rival:String,nombre?:String,){
        this._nombre = nombre;
        this.nombreRival = nombre_rival;
        this.peleasGanadas = peleas_ganadas;
    };
    mostrar():String{
        return `${this._nombre}, ${this.nombreRival}, ${this.peleasGanadas}`;
    }
    get getNombre():String|undefined{
        return this._nombre;
    }
    set setNombre(nombre:String){
        this._nombre = nombre;
    }
    
}

class Xmen extends Advanger{
    private _poder:string;
    constructor(p:string,win:number,nr:string,n?:string){
        super(win,nr,n);//--> super: metodo que envia a la clase padre los parametros.
        this._poder = p;
    }
    mostrar():string{
        return super.mostrar() + ', ' + this._poder;
    }
}


let a1 = new Advanger(10,"Loky","Ironman");
/*console.log(a1.mostrar());
a1.setNombre = "Lalo";
console.log(a1.getNombre);*/
let x1 = new Xmen("fuego",10,"carlos","Wolverin");
let array = new Array<Advanger>();
array.push(a1);
array.push(x1);

console.log(array);
console.log(x1.mostrar());

class Apocalipsis{ // PATRON DE DISEÑO SINGLETON
    private static _instance:Apocalipsis;
    private constructor(public nombre:string){// con el parametro public creamos el atributo dentro del scope automaticamente

    }
    static get Instance():Apocalipsis{
        if(!this._instance){
            this._instance = new Apocalipsis("HELL");
        }
        return this._instance;
    }
}
console.log(Apocalipsis.Instance);


