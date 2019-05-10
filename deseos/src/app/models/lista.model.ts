import {ListaItem} from "./lista-item.model";


export class Lista {

    id:number;
    titulo:string;
    creadaEn:Date;
    terminadaEn:Date;
    completada:boolean;
    items:ListaItem[];


    constructor(titulo:string){
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.completada = false;
        this.items = [];

        //Crea un id dependiendo de la hora asi el id es unico
        this.id = new Date().getTime();
    }
}
