import { Component } from '@angular/core';
import {DeseosService} from "../../services/deseos.service";
import {Router} from "@angular/router";
import { AlertController } from '@ionic/angular';

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

  //await hace que esperar a que este construido para ejecutarlo, necesita async
   async agregarLista(){
    /*this.router.navigateByUrl('tabs/tab1/agregar');*/
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [{
        name:'titulo',
        type:'text',
        placeholder:'nombre de la lista'
      }],
      buttons: ['OK']
    });

    await alert.present();
  }
}
