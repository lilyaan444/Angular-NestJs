import { Injectable } from '@nestjs/common';
import { DRIVERS } from 'src/data/drivers';
import { Driver } from './drivers.types';

@Injectable()
export class DriversService {
    private _drivers: Driver[] = [];
    
    constructor() {
        this._drivers = DRIVERS;
    }

    getAll(): Driver[] {
        return this._drivers;
    }
}
