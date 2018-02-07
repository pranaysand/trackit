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
    constructor(private customersService:CustomersService) {
  
     }
  
    ngOnInit() {
  this.customersService.getCustomer().subscribe((data)=>
  {
  this.customers=data;
  console.log(this.customers);
  });
  
    }
  
  }
  
