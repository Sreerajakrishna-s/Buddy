import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  constructor(private firestore: AngularFirestore) { }

  // Function to get all explores
  getAllExplores(): Observable<any[]> {
    return this.firestore.collection('explores').valueChanges({ idField: 'id' });
  }

  // Function to add a new explore
  addExplore(explore: any): Promise<any> {
    return this.firestore.collection('explores').add(explore);
  }

  // Function to update an existing explore
  updateExplore(explore: any): Promise<void> {
    const id = explore.id;
    delete explore.id;
    return this.firestore.collection('explores').doc(id).update(explore);
  }

  // Function to delete an explore
  deleteExplore(id: string): Promise<void> {
    return this.firestore.collection('explores').doc(id).delete();
  }
}
