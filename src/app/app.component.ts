import {Component, OnInit} from '@angular/core';
import {Bike} from './bike';
import {BikeService} from './bike.service';

@Component({
  selector: 'app-root',
  template: `
    <h1> {{title}} </h1>
    <div *ngIf="getNumberOfBikes() <= 10" style="background: red">
      number of available bikes:  {{getNumberOfBikes()}}
    </div>
    <div *ngIf="getNumberOfBikes() > 10" style="background: green">
      number of available bikes:  {{getNumberOfBikes()}}
    </div>
    <ul class = "bikes">
      <li *ngFor="let bike of bikes" [class.selected]="bike === selectedBike" (click)="onSelect(bike)">
        <div *ngIf="bike.quantity == 0">
          <span class="badge">{{bike.id}}</span> {{bike.name | uppercase}}
        </div>
        <div *ngIf="bike.quantity != 0">
          <span class="badge">{{bike.id}}</span> {{bike.name | uppercase}}
        </div>
      </li>
    </ul>
    <app-bike [bike]="selectedBike"></app-bike>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bike offers';
  bikes: Bike[] = [];
  selectedBike: Bike;

  constructor(private bikeService: BikeService) {
  }

  getBikes(): void {
    this.bikeService.getBikes().then(bikes => this.bikes = bikes);
  }

  ngOnInit(): void {
    this.getBikes();
  }

  onSelect(bike: Bike): void {
    this.selectedBike = bike;
  }

  getNumberOfBikes(): number {
    let result = 0;
    for (let bike of this.bikes) {
      result += bike.quantity;
    }
    return result;
  }
}
