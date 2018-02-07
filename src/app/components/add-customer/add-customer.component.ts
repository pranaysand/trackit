import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../services/customers.service';
import{Customer} from "../../models/customer";
import{Router} from "@angular/router";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer:any={
    firstName:'',
    lastName:'',
    email:'',
    balance:0,
    activity:true
};
customerInfo:Customer;
  constructor(private customersService:CustomersService, private router:Router) { }

  ngOnInit() {
  }
  onSubmit(value){
    if(value.form.status=="INVALID"){
      console.log("Please fillout the for correctly");
    }
    else{
      this.customerInfo=value.form.value;
      console.log(this.customerInfo);
      this.customersService.addCustomers(this.customerInfo);
      this.router.navigate(["/customers"]);
    }
  }


}
