import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Pipe({
  name: 'doomseguro'
})
export class DoomseguroPipe implements PipeTransform {

  constructor(private doomSan: DomSanitizer){}

  transform(value: string, ...args: any[]): SafeResourceUrl {
    return this.doomSan.bypassSecurityTrustResourceUrl(value);
  }

}
