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
  constructor(private customersService:CustomersService) {

   }

  ngOnInit() {
}

}
