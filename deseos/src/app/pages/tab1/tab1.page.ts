import { Component } from '@angular/core';
import {DeseosService} from "../../services/deseos.service";
import {Router} from "@angular/router";
import { AlertController } from '@ionic/angular';
import {Lista} from "../../models/lista.model";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public deseosService:DeseosService,
              private router:Router,
              private alertController: AlertController){

  }

  //await hace que esperar a que este construido para ejecutarlo, necesita async ya que es una promesa
   async agregarLista(){
    /*this.router.navigateByUrl('tabs/tab1/agregar');*/
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [{
        name:'titulo',
        type:'text',
        placeholder:'nombre de la lista'
      }],
      buttons: [
          {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => console.log('cancerlar')
          },
          {
              text:'Crear',
              handler: (data) =>{
                  console.log(data);
                  if(data.titulo.length === 0) return;
                  const idList = this.deseosService.crearLista(data.titulo);

                  this.router.navigateByUrl(`tabs/tab1/agregar/${idList}`);
              }
          }
          ]
    });

    await alert.present();
  }

    listaSeleccionada(lista:Lista){
        this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`);
    }
}
