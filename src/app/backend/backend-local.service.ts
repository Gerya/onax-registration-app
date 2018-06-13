import { Injectable, Inject, Type, NgZone } from '@angular/core';
import { Observable, Subscriber } from 'rxjs/Rx';


import * as db from 'localforage';

import { Logger } from './logger.service';
import { Identifiable } from './backend.interface';
import { Http } from '@angular/http';
import { Globals, AppVersion, VersionDate, } from '../globals';
import { element, promise } from 'protractor';
import { User } from '../user/user.model';
import { BackendHttpService } from './backend-http.service';


@Injectable()
export class BackendLocalService {

    private static users: User[] = new Array<User>();

    constructor(private logger: Logger, private http: Http, private _ngZone: NgZone ) {
        this.loadUsersData();
    }

    public getUserByBarcode(barcode:number): Observable<User> {
        let user = BackendLocalService.users.find(u => u.bookingnumber == barcode);
        return Observable.create((observer: Subscriber<any>) => {
            if(user){
                observer.next(user);
                observer.complete();
            }else{
                observer.error("There is no such user");
            }

        }); 
    }

    private loadUsersData(){
        this.http.get('assets/users.json')
        .map(res => res.json())
        .subscribe((data: Array<User>) => {
            Array.from(data).forEach(element => {
                BackendLocalService.users.push(User.fromObject(element));
            });
        },
        err => this.handleErrorObservable(err)); 

    }

    private handleErrorObservable = (error: Response | any) => {
        let errMsg: string;
        errMsg = error.message || error.toString() || 'Server Error';
        this.logger.error(errMsg);
        return Observable.throw(errMsg);
    }

}
