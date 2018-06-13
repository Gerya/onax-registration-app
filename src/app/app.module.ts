import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { TimepickerModule, DatepickerModule, ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

import { ScanModule } from './scan/scan.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { BackendModule } from './backend/backend.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',  loadChildren: 'app/home/home.module#HomeModule', },
    ]),
    TimepickerModule.forRoot(),
    DatepickerModule .forRoot(),
    ModalModule.forRoot(),
    BackendModule,
    ScanModule,
    HomeModule,
    UserModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
