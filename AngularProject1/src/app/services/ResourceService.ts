import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Location } from '../model/location';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LocationService } from './LocationService';


@Injectable({
    providedIn: 'root'
})
export class ResourceService {

    selectedLocation$ = new BehaviorSubject<string>('init');

    constructor(private http: HttpClient, private locationSvc: LocationService) {

    }

    loadLocations() {
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        return this.http
            .get<Location[]>('assets/sample-data/locations.json', {headers})
            .subscribe((response: Location[]) => {
                const location: Location = response[0];
                console.log(location);
                this.selectedLocation$.next(location.name);
                this.locationSvc.updateSelectedLocation(location)
            });
    }

    getLocation(): BehaviorSubject<string> {
        return this.selectedLocation$;
    }
}
