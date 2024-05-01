import { Component, OnInit } from '@angular/core';
import { AgregarnotasComponent } from '../agregarnotas/agregarnotas.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-aplicacion-notas',
  templateUrl: './aplicacion-notas.component.html', 
  styleUrls: ['./aplicacion-notas.component.scss'],
})
export class AplicacionNotasComponent  implements OnInit {


  ngOnInit() {}

  notasAgregadas: boolean = false;

  constructor(private modalController: ModalController) { }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: AgregarnotasComponent,
    });
    return await modal.present();


  }

   
  

}
