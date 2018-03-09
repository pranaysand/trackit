
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {Provider} from "../models/provider";

@Injectable()
export class ProvidersService {
providersCollection:AngularFirestoreCollection<Provider>;
providers:Observable<Provider[]>;
providerDoc:AngularFirestoreDocument<Provider>;
provider:Observable<Provider>;

  constructor(private afs: AngularFirestore) {
    this.providersCollection = afs.collection<Provider>('Providers');
   }
   getProviders(){
    this.providers = this.providersCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Provider;
        data.id = a.payload.doc.id;
        return data ;
      })

});
console.log(this.providers);
return this.providers;
  }


}

