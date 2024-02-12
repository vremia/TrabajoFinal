import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { RestApiService } from '../../services/rest-api.service';

export interface Estudiante {
  nombre: string;
  apellido: string;
  edad: number;
  carrera: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  nombres_columna: string[] = ['nombre', 'apellido', 'edad', 'carrera'];
  lista_estudiantes: Estudiante[] = [];

  // GET A ESTUDIANTES
  constructor(private servicio_rest: RestApiService){}

  ngOnInit(): void {
    this.servicio_rest.getEstudiantes().subscribe(datos => {
      console.log(datos);
      this.lista_estudiantes = datos; // Asignar datos a la variable lista_estudiantes
    });
  }
}
