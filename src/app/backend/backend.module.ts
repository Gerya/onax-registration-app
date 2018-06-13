import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { HttpModule }           from '@angular/http';
import { InjectionToken }          from '@angular/core';
import { BackendHttpService }   from './backend-http.service';
import { Logger }               from './logger.service';
import { BackendLocalService } from './backend-local.service';
import { Globals } from '../globals';

export const API_BASE_URL = new InjectionToken('api.base.url');
export const API_URL = new InjectionToken('api.url');


const api_url = Globals.api_base_url + 'api';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    Logger,
    BackendLocalService,
    BackendHttpService,
    { provide: 'API_BASE_URL', useValue: Globals.api_base_url },
    { provide: 'API_URL', useValue: api_url },
  ]
})
export class BackendModule { }