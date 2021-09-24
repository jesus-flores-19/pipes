import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "Capitán America";
  nombre2: string = "jEsuS FLoreS PortiLLo"
  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 1234.5;
  fecha: Date = new Date();
  idioma: string = "fr";
  videoUrl: string = "https://www.youtube.com/embed/Q-vZ6ZvvSys"

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


  cambiarIdioma(i){
    if(i ==1){this.idioma="es"}
    if(i ==2){this.idioma="en"}
    if(i ==3){this.idioma="fr"}

  }





}
