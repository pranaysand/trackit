import { Component, OnInit } from '@angular/core';
import {ProvidersService} from "../../services/providers.service"
import{Provider} from "../../models/provider";

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
providers:Provider[];
  constructor(public providersService:ProvidersService) { }

  ngOnInit() {
    this.providersService.getProviders().subscribe((data)=>{
this.providers=data;
console.log(data);
    });
  }

}
