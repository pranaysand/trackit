import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {Customer} from "../models/customer";

@Injectable()
export class CustomersService {
  customersCollection:AngularFirestoreCollection<Customer>;
  customers:Observable<Customer[]>

  constructor(afs: AngularFirestore) {
    this.customersCollection = afs.collection<Customer>('customers');
    // .valueChanges() is simple. It just returns the 
    // JSON data without metadata. If you need the 
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
  }
  getCustomer():Observable<Customer[]>{
    this.customers = this.customersCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Customer;
        data.id = a.payload.doc.id;
        return data ;
      })

});
return this.customers;
  }

  addCustomers(value){
    this.customersCollection.add(value);
  }
}
