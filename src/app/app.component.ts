import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as db from 'localforage';

import { Globals } from './globals';
import { BackendLocalService } from './backend/backend-local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor( private localBackend: BackendLocalService) { }

  ngOnInit(): void {
  }

  @HostListener('window:beforeunload')
  private clean(): void {
    console.log('Cleaner is called');
  }
}
