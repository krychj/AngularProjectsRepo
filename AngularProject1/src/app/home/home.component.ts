import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../model/location';
import { LocationService } from '../services/LocationService';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private http: HttpClient, private locationService: LocationService) {
        this.loadDefaultLocation();
    }

    ngOnInit(): void {

    }

    loadDefaultLocation(): void {
        
    }
}
