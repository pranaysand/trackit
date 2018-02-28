import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../services/customers.service';
import{Customer} from "../../models/customer";
import{CustomersComponent} from "../customers/customers.component"


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
customers:any;
  constructor(private customersService:CustomersService,private customerComponent:CustomersComponent) {

   }

  ngOnInit() {
this.customersService.getCustomers().subscribe((data)=>
  {
    this.customers=data;
    return this.customers.filter((item, index) => index > 10 );
    //console.log(this.customers);
  })

} 
}




