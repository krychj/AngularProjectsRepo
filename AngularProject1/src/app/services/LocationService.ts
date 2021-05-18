import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Location } from '../model/location';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

    defaultLocation: Location = {
        id: '1',
        name: 'Manitou Spring, CO - init'
    };

    locations: Location[] = [
        {
            id: '1',
            name: 'Manitou Spring, CO - init'
        }
    ];

    selectedLocation$ = new BehaviorSubject<Location>(this.defaultLocation);
    locations$ = new BehaviorSubject<Location[]>(this.locations);

    constructor(private http: HttpClient) {

    }

    initialize(): Subscription {
        return this.loadLocations();
    }

    getLocation(): Location {
        return this.selectedLocation$.getValue();
    }

    getLocations(): Location[] {
        const locations: Location[] = this.locations$.getValue();
        return locations;
    }

    public updateSelectedLocation(location: Location): void{
        this.selectedLocation$.next(location);
    }

    public updateLocations(locations: Location[]): void {
        this.locations$.next(locations);
    }

    loadLocations(): Subscription {
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        return this.http
            .get<Location[]>('assets/sample-data/locations.json', {headers})
            .subscribe((response: Location[]) => {
                const location: Location = response[0];
                console.log('First location loaded by ResourceService: ' + location.name);
                this.updateSelectedLocation(location);
                this.updateLocations(response);
            });
    }
}
