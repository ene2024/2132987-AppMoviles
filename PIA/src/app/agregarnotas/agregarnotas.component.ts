import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-agregarnotas',
  templateUrl: './agregarnotas.component.html',
  styleUrls: ['./agregarnotas.component.scss'],
})
export class AgregarnotasComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  name: string= '';
  notes: string = '';
  vinietasActivadas: boolean = false;



  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  toggleVinietas() {
    this.vinietasActivadas = !this.vinietasActivadas;
    this.notes += '\n\t• \n';
  }

  agregarVinieta() {
    if (this.vinietasActivadas) {
    this.notes += '\t• ';
    }
  }

  
  

  


  }


