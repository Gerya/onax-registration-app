import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';





@Component({
    selector: 'scan',
    template: ''
})

export class ScanComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private _ngZone: NgZone,
        private location: Location
    ) {  }

    ngOnInit(): void {
        this.scanBarcode();
    }

    public scanResult(result) {
        this._ngZone.run(() => {
            if (result.text) {
                // this.data = result.text;
                this.router.navigate(['/user', { 'barcode': result.text }]);
            } else if (result.cancelled) {
                this.location.back();
                //this.router.navigate(['/categories']);
            } else {
                alert('Scanning failed: ' + result);
                this.location.back();
                //this.router.navigate(['/categories']);
            }
        });
    }

    public scanBarcode(){
        cordova.plugins.barcodeScanner.scan(
            (result) => this.scanResult(result),

            (error) => this.scanResult(error),

            {
                'preferFrontCamera': false,           // iOS and Android
                'showFlipCameraButton': true,         // iOS and Android
                // 'showTorchButton': true,              // iOS and Android
                //'torchOn': true,                       // Android, launch with the torch switched on (if available)
                'prompt': 'Place a barcode inside the scan area', // Android
                //'resultDisplayDuration': 500,          // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                // 'formats': 'QR_CODE,PDF_417',         // default: all but PDF_417 and RSS_EXPANDED
                'orientation': 'portrait',           // Android only (portrait|landscape), default unset so it rotates with the device
                //'disableAnimations': true,            // iOS
                //'disableSuccessBeep': false            // iOS
            }
        );
    }
}