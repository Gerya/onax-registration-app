import { NgModule }     from '@angular/core';
import {CommonModule}   from '@angular/common';
import { RouterModule } from '@angular/router';

import { ScanComponent } from './scan-component';


@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild([
            { path: 'scan', component:  ScanComponent},
        ])
  ],
  declarations: [ScanComponent],
  exports: [],
  providers:[]
  
})

export class ScanModule { }