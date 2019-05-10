import { Component, OnInit } from '@angular/core';
import {DeseosService} from "../../services/deseos.service";
import {ActivatedRoute} from "@angular/router";
import  {Lista} from "../../models/lista.model";
import  {ListaItem} from "../../models/lista-item.model";


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista : Lista;
  nombreItem : '';

  constructor(private deseosService:DeseosService,
              private route: ActivatedRoute) {

    const listId = this.route.snapshot.paramMap.get('listaId');

    this.lista = this.deseosService.getLista(listId);

  }

  ngOnInit() {
  }

  addItem(){
    if(this.nombreItem.length === 0)return;

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);


    //limpiamos nombreItem
    this.nombreItem = '';
    this.deseosService.saveStorage();
  }

  cambioCheck( item:ListaItem ){
    const pendientes = this.lista.items.
                            filter( itemData => !itemData.completado )
                            .length;

    if(pendientes === 0 ){
      this.lista.terminadaEn = new Date();
      this.lista.completada = true;
    }
    else{
      this.lista.terminadaEn = null;
      this.lista.completada = false;
    }

    this.deseosService.saveStorage();
  }

  borrar(i : number){
    console.log(i);
    this.lista.items.splice( i, 1 );
    console.log(this.lista.items);
    this.deseosService.saveStorage();
  }
}
