import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {


  constructor(public tareaService: TareaService) {}

  ngOnInit() {}

}


