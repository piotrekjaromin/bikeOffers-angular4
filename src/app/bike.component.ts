import {Component, Input} from '@angular/core';
import {Bike} from './bike';


@Component({
  selector: 'app-bike',
  template: `
    <hr>
    <div class="course" *ngIf="bike">
      <h3>{{bike.name | uppercase}}</h3>
      <p>{{bike.price | currency}} </p>
      <img [src]="bike.imagePath">
      <table>
        <tr><td>Available: </td><td>{{bike.quantity}}</td><td></td><td></td></tr>
        <tr>
          <td>Ordered: </td><td>{{bike.numberOfOrders}}</td>
          <td><button class="btn btn-default" *ngIf="bike.numberOfOrders > 0" (click)="decreaseOrder()">-</button></td>
          <td><button class="btn btn-default" *ngIf="bike.quantity > 0" (click)="increaseOrder()">+</button></td></tr>
      </table>
    </div>
  `,
  styles: [`
    .course {
      background: #F5F5F5;
      border-radius: 5px;
      border: 1px solid #ccc;
      box-shadow: 1px 1px 5px #EAEAEA;
      height: 30%;
      padding: 15px 10px;
      width: 40%;
    }
    .course h3 {
      color: #999;
      font-size: 1.9rem;
      font-weight: 200;
      line-height: 10px;
    }

    .course img {
      border: none;
      width: 90%;
    }
  `]
})
export class BikeComponent {
  @Input() bike: Bike;
  increaseOrder(): void {
    if (this.bike.quantity > 0) {
      this.bike.quantity --;
      this.bike.numberOfOrders ++;
    }
  }
  decreaseOrder(): void {
    if (this.bike.numberOfOrders > 0) {
      this.bike.numberOfOrders --;
      this.bike.quantity ++;
    }
  }
}
