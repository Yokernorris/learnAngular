import { Injectable } from '@angular/core';
import {Lista} from "../models/lista.model";

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas:Lista[] = [];

  constructor() {
    this.loadStorage();
  }

  crearLista(titulo:string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.saveStorage();

    return nuevaLista.id;
  }

  saveStorage(){
    //data es la key
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  getLista(id : string | number){
    id = Number(id);
    return this.listas.find(listaData => listaData.id === id);

  }

  loadStorage(){
    if(JSON.parse(localStorage.getItem('data')))
      this.listas = JSON.parse(localStorage.getItem('data'));
  }

  removeList(lista:Lista){
    this.listas = this.listas.filter(listaData => listaData.id !== lista.id);
    this.saveStorage();
  }

}
