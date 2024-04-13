import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarea } from './tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareasSubject = new BehaviorSubject<Tarea[]>([]);
  tareas$ = this.tareasSubject.asObservable();

  constructor() { }

  agregarTarea(tarea: Tarea) {
    const tareas = [...this.tareasSubject.getValue(), tarea];
    this.tareasSubject.next(tareas);
  }
}
