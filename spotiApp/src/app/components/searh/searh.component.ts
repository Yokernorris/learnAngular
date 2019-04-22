import { Component } from '@angular/core';
import  {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
  styles: []
})
export class SearhComponent {

  artistas:any[] = [];

  constructor(private _spotify:SpotifyService) { }

  buscar(termino:string){
    console.log(termino);
    this._spotify.getArtista(termino)
      .subscribe((data:any) => {
        console.log(data);
        this.artistas = data;
      });

  }

}
