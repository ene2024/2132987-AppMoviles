import { Component, OnInit } from '@angular/core';
import { Nota } from '../servives/usuarios.model';
import { FirestoreService } from '../servives/firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  notas: Nota[];

  tab2Notes: { title: string, description: string }[];

  constructor(private firestoreS: FirestoreService) {}



  ngOnInit():void {
    this.firestoreS.getNotas().subscribe(notas=>{
      this.notas = notas;
      console.log(notas);
    })
  }

  deleteNota(id: string) {
    this.firestoreS.deleteNota(id).then(() => {
      this.notas = this.notas.filter(nota => nota.id !== id);
    }).catch(error => {
      console.error('Error eliminando nota: ', error);
    });
  }


}
