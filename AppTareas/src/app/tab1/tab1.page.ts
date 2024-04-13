import { Component, OnInit } from '@angular/core';
import { AppTareasService } from '../services/app-tareas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  tareas;

  constructor(private appTareasService: AppTareasService) {}

  ngOnInit() {
    this.obtenerTareas();
  }

  async obtenerTareas(){

    this.appTareasService.listar().then( r => {
      if(r)
        this.tareas = r;
    });

  }

}
