import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '../model/location';
import { LocationService } from '../services/LocationService';

@Component({
    selector: 'app-home',
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    locations: Location[] = [];

    constructor(private locationService: LocationService) {
        this.locationService.locations$.subscribe((locations) => {
            this.locations = locations;
        });
    }

    ngOnInit(): void {

    }
}
