import { Component, ViewChild, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo: string;
  descripcion: string;
  isDisabled: boolean = true;
  @ViewChild("crearNotaform") notasForm: any;
  firestore: Firestore = inject(Firestore)

  constructor() {}

  checkInputs() {
    if (this.titulo && this.descripcion) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }
  agregarNota():void{
    const acollection = collection(this.firestore, 'notas');
    addDoc(acollection, {
      'titulo' : this.notasForm.value.titulo,
      'descripcion' : this.notasForm.value.description
    });
  }

  resetearForm():void{
    this.notasForm.reset({
      'titulo': '',
      'description': '',
    })
  }

  summitForm(): void {

    this.agregarNota();
    
    this.resetearForm();
    
  }


}
