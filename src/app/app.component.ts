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
  fecha: Date = new Date();
  idioma: string = "fr";

  valorPromesa  = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Llego la data perros")
    }, 4500);
  })

  heroe: {} = {
    nombre: "Logan",
    clave: "Wolwerine",
    edad: 500,
    direccion:{
      calle: "Primera",
      casa: 20
    }
  }


  cambiarIdioma(idioma: string){
    this.idioma = idioma;
  }





}
