import { Injectable } from '@angular/core';
import { Bike } from './bike';
import { BIKES } from './bikeDatas';

@Injectable()
export class BikeService {
  getBikes(): Promise<Bike[]> {
    return Promise.resolve(BIKES);
  }
}
