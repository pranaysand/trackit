import { Component, OnInit } from '@angular/core';
import {Provider} from "../../models/provider"

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {
provider:Provider={
  firstName:"Firstname",
  lastName :'',
  id:'',
  email:''
 
  
};


  constructor() { }

  ngOnInit() {
  }

}
