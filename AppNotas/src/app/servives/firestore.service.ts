import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Nota } from './usuarios.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {



  constructor(private firestore: Firestore) { }

  getNotas(): Observable<Nota[]>{

    const placeRef= collection(this.firestore, 'notas');
    return collectionData(placeRef, {idField: 'id'}) as Observable<Nota[]>;
     
  }

  deleteNota(id: string): Promise<void> {
    const notaDocRef = doc(this.firestore, `notas/${id}`);
    return deleteDoc(notaDocRef);
  }


}
