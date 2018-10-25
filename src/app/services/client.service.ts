import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

import { Client } from "../models/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;
  
  constructor(private afs: AngularFirestore) { 
    this.clientCollection = this.afs.collection('clients', 
      ref => ref.orderBy('lastName', 'asc'));
  }
}
