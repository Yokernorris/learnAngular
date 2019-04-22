import { Component, OnInit } from '@angular/core';
import  {SpotifyService} from '../../services/spotify.service'




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones:any[] = [];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor(private _spotify:SpotifyService) {
    this.error = false;
    this.loading = true;
    this._spotify.getNewReleases().subscribe((data:any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (error) =>{//Manejo de errores
      this.mensajeError = error.error.error.message;
      this.error = true;
      this.loading = false;
    });
  }


}
