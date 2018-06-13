import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap';

import { UserDetailsComponent } from './user-details.component';
import { UserService } from './user.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'user', component:  UserDetailsComponent},
    ]),
    ModalModule,
  ],
  declarations: [
    UserDetailsComponent,
  ],
  exports: [],
  providers: [UserService]
})

export class UserModule { }