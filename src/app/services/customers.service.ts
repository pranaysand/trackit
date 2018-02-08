import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {Customer} from "../models/customer";

@Injectable()
export class CustomersService {
  customersCollection:AngularFirestoreCollection<Customer>;
  customers:Observable<Customer[]>;
  customerDoc:AngularFirestoreDocument<Customer>;
  customer:Observable<Customer>;

  constructor(private afs: AngularFirestore) {
    this.customersCollection = afs.collection<Customer>('customers');
    // .valueChanges() is simple. It just returns the 
    // JSON data without metadata. If you need the 
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
  }
  getCustomers(){
    this.customers = this.customersCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Customer;
        data.id = a.payload.doc.id;
        return data ;
      })

});
console.log(this.customers);
return this.customers;
  }

  addCustomers(value){
    this.customersCollection.add(value);
  }
  getCustomer(id:string):Observable<Customer>{
    this.customerDoc=this.afs.doc<Customer>(`customers/${id}`);
    this.customer=this.customerDoc.snapshotChanges().map(action=>{
      if(action.payload.exists===false){
        return null;
      }else{
        const data=action.payload.data() as Customer;
        data.id= action.payload.id;
        return data;
        
      };
      }
      
    );
    console.log(this.customer);
    return this.customer;
   };
}
