import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "Capitán America";
  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 1234.5;


}