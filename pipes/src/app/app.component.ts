import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'David';

  nombre2 ="daVid gaRCia toledAno";

  array = [1,2,3,4,5,6,7,8,9,10];

  pi = Math.PI;

  a = 0.234;

  salario = 2000;

  pokemon = {
    nombre:"picachuu",
    poder:"chispas",
    zona: {
      bosque:'villamonte',
      desierto:'calorvilla'
    }
  };

  activar = true;

  userLang = navigator.language;

  fecha = new Date();

  video = "ms0OFUwsEVQ";

  valorDePromesa = new Promise(((resolve, reject) => {
    setTimeout( ()=> resolve('Llego la data!!'), 3500);
  }))
}
