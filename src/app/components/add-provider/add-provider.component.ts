import { Component, OnInit } from '@angular/core';
import {Provider} from "../../models/provider";
import {ProvidersService} from "../../services/providers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {
provider?:Provider={
  firstName:"Firstname",
  lastName :'',
  id:'',
  email:''
};


  constructor(private providersService:ProvidersService, private router:Router) { }

  ngOnInit() {
  };
  onSubmit(data){
    console.log(data.form.value);
    this.provider=data.form.value;
    this.provider.dateCreated=new Date();
    this.providersService.addProvider(this.provider);
    this.router.navigate(["/providers"]);
  };

}
