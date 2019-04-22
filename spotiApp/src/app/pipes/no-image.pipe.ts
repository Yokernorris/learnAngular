import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
//Usamos este pipe para solucionar el error de cuando la imagen no esta disponible
export class NoImagePipe implements PipeTransform {

  transform(img:any[]):string {
    if (!img) return 'assets/img/noimage.png';

    if(img.length > 0) return img[0].url;
    else return  'assets/img/noimage.png';
  }

}
