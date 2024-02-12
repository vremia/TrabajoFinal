import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../components/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private apiUrl = 'http://localhost:3000/estudiantes';

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<any>{
    console.log("Te devuelvo estudiantes")
    return this.http.get(this.apiUrl);
  }

  guardarEstudiante(nuevo_estudiante: any): Observable<any>{
    return this.http.post(this.apiUrl, nuevo_estudiante);
  }
}
