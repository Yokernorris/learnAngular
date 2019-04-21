import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value:string, activar:boolean): string {
    let contrasena= "";

    if(activar){
      for(let i = 0; i < value.length; i++){contrasena += '*'}
    }
    else contrasena = value;
    return contrasena;
  }

}
