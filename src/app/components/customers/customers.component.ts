import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../services/customers.service';
import{Customer} from "../../models/customer";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:Customer[];
  toggleSort:boolean=true;
 
    constructor(private customersService:CustomersService) {
  console.log("hii from constructor");
     }
  
    ngOnInit() {
 

  this.customersService.getCustomers().subscribe((data)=>
  {
  this.customers=data;
  console.log(this.customers);
  });
  console.log("Hii from ngoninit");
    }
// Sorting According to Balance implemented
  sortBalance(){
    this.toggleSort=!this.toggleSort;
    if(this.toggleSort==false){
      this.customers=this.customers.sort((a,b)=>{
        return a.balance-b.balance;
        
    });
  }
    else{
      this.customers=this.customers.sort((a,b)=>{
        return a.balance+b.balance;
    }
  );
    };
    
     
 console.log(this.customers);
 console.log(this.toggleSort);
 };
 //Sort by email Custom Function implemented
 sortEmail(){
  this.toggleSort=!this.toggleSort;
  if(this.toggleSort==false){
    this.customers=this.customers.sort((a,b)=>{
      var A = a.email.toUpperCase(); // ignore upper and lowercase
      var B = b.email.toUpperCase();
      if(A<B){
        return -1;
      };
      if(A>B){
        return +1;
      }
      return 0;
      
  });
}
  else{
    this.customers=this.customers.sort((a,b)=>{
      var A = a.email.toUpperCase(); // ignore upper and lowercase
      var B = b.email.toUpperCase();
      if(A>B){
        return -1;
      };
      if(A<B){
        return +1;
      }
      return 0;
      
  });
};   
};

}

