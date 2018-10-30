import { Component, OnInit } from '@angular/core';
declare let L;
declare let tomtom: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const map = tomtom.L.map('map', {
      key: '<api-key>',
      basePath: '/src/assets/sdk/',
      center: [ 52.360306, 4.876935 ],
      zoom: 15,
      source : 'vector'
    });
  }
}
