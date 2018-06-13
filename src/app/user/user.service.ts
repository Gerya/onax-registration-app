import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as db from 'localforage';

import { User } from './user.model';
import { BackendHttpService } from '../backend/backend-http.service';
import { Globals } from '../globals';
import { BackendLocalService } from '../backend/backend-local.service';



@Injectable()
export class UserService {
    constructor(
        private localBackend: BackendLocalService,
        private httpBackend: BackendHttpService
    ) { }

    public getUserbyBarcode(barcode: number): Observable<User> {
        return this.localBackend.getUserByBarcode(barcode);
    }

}
