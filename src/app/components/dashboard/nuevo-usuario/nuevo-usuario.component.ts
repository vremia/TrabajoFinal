import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule,  FormControl, FormGroup, Validators} from '@angular/forms';
import { RestApiService } from '../../../services/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [NavbarComponent, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {
  //HACER UN POST
  constructor(private servicio_rest: RestApiService, private router: Router){}

  formCreate = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.pattern('^[1-9][0-9]?$|^100$')),
    carrera: new FormControl('', Validators.required)
  })

  crear():void{
    this.servicio_rest.guardarEstudiante({
      "nombre": this.formCreate.value.nombre,
      "apellido": this.formCreate.value.apellido,
      "edad": this.formCreate.value.edad,
      "carrera": this.formCreate.value.carrera
    }).subscribe(datos => {
      console.log("El nuevo estudiante está guardado correctamente");
      console.log(datos);
      this.router.navigateByUrl('/dashboard');
    });

    console.log("Creado con éxito");
  }
}
