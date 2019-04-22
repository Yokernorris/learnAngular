import { Component } from '@angular/core';
import  {ActivatedRoute} from '@angular/router'
import {SpotifyService} from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})

export class ArtistaComponent {

  artista:any = {};
  loading:boolean = true;
  topTracks:any[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private spotifyService:SpotifyService) {
    this.activatedRoute.params.subscribe((params:any) => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });


  }

  getArtista(id:any){
    this.spotifyService.getArtista(id).subscribe(artista => {
      this.artista = artista
      /*console.log(artista);*/
      this.loading = false;
    });
  }

  getTopTracks(id){
    this.spotifyService.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks)
        this.topTracks = topTracks;
      });
  }

}
