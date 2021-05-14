import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../model/location';

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
}
