import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, visible: boolean): string{
    if(visible){
      return value;
    }else{
      let palabras = value.split(" ");
      palabras = palabras.map(palabra => {
        return "*".repeat(palabra.length);
      });
      return palabras.join(" ");
    }
  }

}
