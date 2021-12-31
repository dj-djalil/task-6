import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from "angular-datatables";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
