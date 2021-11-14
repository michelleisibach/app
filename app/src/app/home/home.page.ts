import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/michelleisibach/cku0a7bz44bi117nwsautr8za';
  lat = 47.12772;
  lng = 8.31589;
  zoom = 12;
  accessToken = environment.mapboxkey;
  data: any;
  geojson: string;

  constructor() {}

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: this.accessToken,
      container: 'fullscreen',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]});

      this.map.on('load', () => {
        this.map.resize();      
    });
  }

}
