import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'doomseguro'
})
export class DoomseguroPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){}

  transform(value:string): any {
    let cut:string[] = value.split(':');
    let transform:string = `https://open.spotify.com/embed/${ cut[1]}/${cut[2]}`;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(transform);
  }

}
