import { Injectable } from '@angular/core';
import { LocationService } from './LocationService';

@Injectable({
    providedIn: 'root'
})
export class InitializerService {

    constructor(private locationSvc: LocationService) {

    }

    // tslint:disable-next-line: typedef
    async initialize() {
        this.locationSvc.initialize();
    }
}
