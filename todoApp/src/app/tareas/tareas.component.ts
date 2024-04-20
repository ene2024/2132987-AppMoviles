import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { ModalController } from '@ionic/angular';
import { AgregarTareasComponent } from '../agregar-tareas/agregar-tareas.component';
import {Tarea} from '../tarea.interface';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent implements OnInit {
  
  tareas: Tarea[] = [];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    const storedTareas = localStorage.getItem('tareas');

    if (storedTareas) {
      this.tareas = JSON.parse(storedTareas);
    }
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AgregarTareasComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm' && data) {
      this.agregarTarea(data); 
    }
  }

  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea); 

    localStorage.setItem('tareas', JSON.stringify(this.tareas));

  }


}

