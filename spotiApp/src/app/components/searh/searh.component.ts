import { Component } from '@angular/core';
import  {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
  styles: []
})
export class SearhComponent {

  artistas:any[] = [];
  loading:boolean;

  constructor(private _spotify:SpotifyService) {
  }

  buscar(termino:string){
    if(termino != '') {
      this.loading = true;
      console.log(termino);
      this._spotify.getArtistas(termino)
        .subscribe((data: any) => {
          console.log(data);
          this.artistas = data;
          this.loading = false;
        });
    }
    else this.artistas = [];
  }

}
