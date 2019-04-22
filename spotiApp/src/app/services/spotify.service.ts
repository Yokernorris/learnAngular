import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQD9FdjU7O65a2VbZYB3X9TLraHo2S8g8aXPKBc4ADZTXvUwwuLegtvNzGKW4ZdQHC_1qU7IHqNPgvJKB6A'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){

    return this.getQuery("browse/new-releases")
      .pipe(map(data => data['albums'].items));

   /* return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
      .pipe( map(data => data['albums'].items));*/
  }

  getArtistas(termino:string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));

    //con pipe(map) filtramos el contenido
 /*   return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{headers})
      .pipe(map(data => data['artists'].items));*/
  }

  getArtista(id:string) {

    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id:string) {

    return this.getQuery(`artists/${ id }/top-tracks?country=US`)
      .pipe(map(data => data['tracks']));
  }

}

