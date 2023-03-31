import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location-explore',
  templateUrl: './location-explore.page.html',
  styleUrls: ['./location-explore.page.scss'],
})
export class LocationExplorePage implements OnInit {

  val;
  locations;
  constructor(private loc: LocationsService, private http: HttpClient) {

    this.http.get('assets/states.json').subscribe((data: any) => {
      console.log(data.states);

      this.locations = data.states;
    }, err => {
      console.log(err);
    });
  }

  open(val) {
    this.val = val;
  }

  close(){
    this.val = -1;
  }

  ngOnInit() {
  }

}
