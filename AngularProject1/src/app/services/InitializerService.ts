import { Injectable } from '@angular/core';
import { Location } from '../model/location';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LocationService } from './LocationService';
import { Subscription } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class InitializerService {

    constructor(private http: HttpClient, private locationSvc: LocationService) {

    }

    // tslint:disable-next-line: typedef
    async initialize() {
        this.locationSvc.initialize();
    }

    /* loadLocations(): Subscription {
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        return this.http
            .get<Location[]>('assets/sample-data/locations.json', {headers})
            .subscribe((response: Location[]) => {
                const location: Location = response[0];
                console.log('First location loaded by ResourceService: ' + location.name);
                this.locationSvc.updateSelectedLocation(location);
                this.locationSvc.updateLocations(response);
            });
    } */
}
