import { Injectable, Inject, Type } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Logger } from './logger.service';
import { Globals } from '../globals';
import { User } from '../user/user.model';

@Injectable()
export class BackendHttpService {
    private baseUrl: string;
    private apiUrl: string;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor( @Inject('API_BASE_URL') baseUrl: string, @Inject('API_URL') apiUrl: string, private http: Http, private logger: Logger) {
        this.baseUrl = baseUrl;
        this.apiUrl = apiUrl;
    }

    private handleErrorObservable = (error: Response | any) => {
        let errMsg: string;
        let err: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            err = (body && body.error) || (body instanceof ProgressEvent ? "Server is down!" : JSON.stringify(body));
            errMsg = `${error.status} - ${error.statusText || ''} : ${err}`;
        } else {
            errMsg = error.message || error.toString() || 'Server Error';
            err = error;
        }
        this.logger.error(errMsg);
        return Observable.throw(err);
    }

    public formatDate(date: Date): string {
        let y = String(date.getFullYear());
        let m = String(date.getMonth());
        let d = String(date.getDate());
        let h = String(date.getHours());
        let i = String(date.getMinutes());

        if (Number(m) < 10) m = '0' + m;
        if (Number(d) < 10) d = '0' + d;
        if (Number(h) < 10) h = '0' + h;
        if (Number(i) < 10) i = '0' + i;

        return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':00';
    }

}
