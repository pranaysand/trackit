import { Component, OnInit } from '@angular/core';
import {Customer} from "../../models/customer";
import {Router,ActivatedRoute, Params} from "@angular/router";
import {CustomersService} from "../../services/customers.service";
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
id:string;
customer:Customer;
  constructor(private route:ActivatedRoute, private customersService:CustomersService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
   
   this.customersService.getCustomer(this.id).subscribe((customer)=>{
this.customer=customer;
console.log(this.customer);
    })
  };

}
