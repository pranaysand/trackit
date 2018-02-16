import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../services/customers.service';
import{Customer} from "../../models/customer";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
customers:Customer[];
name:string="pranay";
age:number=25;
private status:string;
  constructor(private customersService:CustomersService) {

   }

  ngOnInit() {
    
}


}
class childDash extends DashboardComponent{
printname(){
  console.log(name);
}
  
}


