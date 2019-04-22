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
      'Authorization':'Bearer BQAGZiJi2gnoCFLz5v-J1eckDDSR_aECLZeNewHWxfbE3vffjmODz12S4iWps6qf4BqAOt8EOLHdGFuTP24'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){

    return this.getQuery("browse/new-releases")
      .pipe(map(data => data['albums'].items));

   /* return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
      .pipe( map(data => data['albums'].items));*/
  }

  getArtista(termino:string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));

    //con pipe(map) filtramos el contenido
 /*   return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{headers})
      .pipe(map(data => data['artists'].items));*/
  }

}

