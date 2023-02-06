import { Component ,OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit{
  map: any;

  constructor() { }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    this.map = L.map('map').setView([13.0827, 80.2707], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png ', {

      maxZoom: 10,
      attribution: 'Map data &copy; <a href="https://a.tile.openstreetmap.org/13/4461/2968.png">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
    
  }

