import{RouterModule,Routes} from "@angular/router";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import{CustomersService} from "./services/customers.service";


import{environment} from '../environments/environment';
import { CustomersComponent } from './components/customers/customers.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ComponentsComponent } from './components/components.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { ProvidersService} from './services/providers.service'


//Creating Routes.
const appRoutes: Routes=[
  {path:'',component:DashboardComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'login',component:LoginComponent},
  {path:'customers',component:CustomersComponent},
  {path:'addcustomer', component:AddCustomerComponent},
  {path:"customers/:id",component: CustomerDetailsComponent},
  {path:"providers",component:ProvidersComponent},
  {path:"addprovider",component:AddProviderComponent}

 
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ContactsComponent,
    LoginComponent,
    RegisterComponent,
    CustomersComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    ProvidersComponent,
    ComponentsComponent,
    AddProviderComponent,
    
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase,"trackit"), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule
  ],
  providers: [CustomersService,CustomersComponent,ProvidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
