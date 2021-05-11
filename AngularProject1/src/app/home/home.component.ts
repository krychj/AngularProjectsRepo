import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../model/location';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    selectedLocation$ = new BehaviorSubject<string>('init value');
    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {
        this.loadDefaultLocation();
    }

    loadDefaultLocation(): void {
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        this.http.get<Location[]>('assets/sample-data/locations.json', {headers})
            .subscribe(
                data => {
                    console.log(data[0]);
                    this.selectedLocation$.next(data[0].name);
                }
            );
    }
}
