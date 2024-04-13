import { Component } from '@angular/core';
import { TareasService } from '../tarea.service';
import { Tarea } from '../tarea.model';

@Component({
  selector: 'app-agregar-tareas',
  templateUrl: './agregar-tareas.component.html',
  styleUrls: ['./agregar-tareas.component.scss'],
})
export class AgregarTareasComponent {
  nombre: string = '';
  detalles: string = '';
  fechaEntrega: string = '';

  constructor(private tareasService: TareasService) { }

  agregarTarea() {
    const nuevaTarea: Tarea = {
      nombre: this.nombre,
      detalles: this.detalles,
      fechaEntrega: this.fechaEntrega
    };

    this.tareasService.agregarTarea(nuevaTarea);

    // Limpiar los campos después de agregar la tarea
    this.nombre = '';
    this.detalles = '';
    this.fechaEntrega = '';
  }
}
