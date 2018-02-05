import{RouterModule,Routes} from "@angular/router";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

//Creating Routes.
const appRoutes: Routes=[
  {path:'',component:DashboardComponent},
  {path:'contacts',component:ContactsComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ContactsComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
