import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/LocationService';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../model/location';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

    selectedLocation$: BehaviorSubject<Location>;
    selectedLocation!: Location;

    constructor(private locationService: LocationService) {
        this.selectedLocation$ = this.locationService.getLocation();
    }

    ngOnInit(): void {
        this.locationService.selectedLocation$.subscribe(location => {
            console.log(location);
            this.selectedLocation = location;
        });
    }

}
