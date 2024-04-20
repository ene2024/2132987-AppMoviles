import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Tarea} from '../tarea.interface';



@Component({
  selector: 'app-agregar-tareas',
  templateUrl: './agregar-tareas.component.html',
  styleUrls: ['./agregar-tareas.component.scss'],
})
export class AgregarTareasComponent {

  nombreTarea: string ='';
  fechaEntrega: string='';
  detalles: string='';
  

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }



  confirm() {
    const tarea: Tarea= {
      nombre: this.nombreTarea,
      fecha: new Date(this.fechaEntrega),
      detalles: this.detalles    
    };
    this.modalCtrl.dismiss(tarea, 'confirm');
  } 


  OnInit(){}
}

