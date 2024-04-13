interface Tarea {
  id: number;
  creadaDate: string;
  nombre: string;
  detalles: string;
  entregaDate: string;
  estado: boolean;
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, take, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppTareasService {

  URL = "https://6619e45b125e9bb9f29af151.mockapi.io/tarea";

  constructor(private http: HttpClient) { }

  async listar(){

    try {
      const response = await lastValueFrom(this.http.get(this.URL));
      return response;
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
      throw error; 

    }
  }
}
