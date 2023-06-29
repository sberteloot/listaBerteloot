import { Component } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  titulo : string = "Listado de Alumnos"
  listadoAlumnos : Alumno[] = [];

  constructor(){
    this.listadoAlumnos.push(new Alumno(1, "Berteloot", "Sergio", "sjberteloot@gmail.com", new Date("1977-03-09")));
    this.listadoAlumnos.push(new Alumno(2, "Ramires", "Alvaro", "alvaro.ramirez@gmail.com", new Date("1990-12-12")));
    this.listadoAlumnos.push(new Alumno(3, "Fernandez", "Julia", "julia.fernandez@gmail.com", new Date("2015-03-09")));
    this.listadoAlumnos.push(new Alumno(4, "Gomes", "Ramiro", "ramiro.gomez@gmail.com", new Date("1999-05-07")));
    this.listadoAlumnos.push(new Alumno(5, "Sanchez", "Alicia", "alicia.sanchez@gmail.com", new Date("2000-07-20")));
    this.listadoAlumnos.push(new Alumno(6, "Lozada", "Veronica", "veronica.lozada@gmail.com", new Date("2001-10-15")));
    this.listadoAlumnos.push(new Alumno(7, "Fernandez", "Luisa", "luisa.fernandez@gmail.com", new Date("2011-07-17")));
    this.listadoAlumnos.push(new Alumno(8, "Sandoval", "Santiago", "santiago.sandoval@gmail.com", new Date("2002-05-13")));
    this.listadoAlumnos.push(new Alumno(9, "Mendieta", "Sergio", "sergio.mendieta@gmail.com", new Date("2000-03-27")));
    this.listadoAlumnos.push(new Alumno(10, "Garcia", "Lucila", "lucila.garcia@gmail.com", new Date("1990-01-04")));
  } 

  calcularEdad(fNacimiento:Date) {
      let timeDiff = Math.abs(Date.now() - fNacimiento.getTime());
      return Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }
}
