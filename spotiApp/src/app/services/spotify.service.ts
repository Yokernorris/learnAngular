import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDQ1vC_5QIxqiVmD3vtAfg23y12zZ8EzjpErzPAbWp2OLr3_kHksxxnTfreJe_rQV9mC5f5wKiZpqTKfo8'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }

  getArtista(termino:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDQ1vC_5QIxqiVmD3vtAfg23y12zZ8EzjpErzPAbWp2OLr3_kHksxxnTfreJe_rQV9mC5f5wKiZpqTKfo8'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{headers});
  }

}

