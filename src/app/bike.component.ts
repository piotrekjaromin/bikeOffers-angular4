import {Component, Input} from '@angular/core';
import {Bike} from './bike';


@Component({
  selector: 'app-bike',
  template: `
    <hr>
    <div *ngIf="bike">
      <h4>Zmiana oceny:</h4>
      <h2>{{bike.name}} details!</h2>
      <input [(ngModel)]="bike.quantity" placeholder="quantity"/>
    </div>
  `,
  styles: [``]
})
export class BikeComponent {
  @Input() bike: Bike;
}
