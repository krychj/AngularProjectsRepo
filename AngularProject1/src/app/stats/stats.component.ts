import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/LocationService';
import { Location } from '../model/location';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

    selectedLocation!: Location;

    constructor(private locationService: LocationService) {
        this.locationService.selectedLocation$
            .subscribe((location: Location) => {
                this.selectedLocation = location;
            });
    }

    ngOnInit(): void {

    }

}
