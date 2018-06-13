import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute, Params } from '@angular/router';

import { User } from './user.model';
import { UserService } from './user.service';
import { Globals } from '../globals';


@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html'
})

export class UserDetailsComponent implements OnInit {

    public user: User = new User(null, null, null, null);;

    public errorMessage: string;

    public isErrorNotVisible:boolean = true;

    constructor(private service: UserService,  private router: Router,  private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params
            .subscribe((params: Params) => {
                console.log(JSON.stringify(params));
                let barcode = +params['barcode'];
                this.findUserByBarcode(barcode);
            });
    }


    private findUserByBarcode(barcode: number){
        this.service.getUserbyBarcode(barcode)
        .subscribe(
        user => {   
            this.user = user;
        },
        error => {
            this.errorMessage = error;
            this.isErrorNotVisible = false;
        }
        );
    }

}