import { Injectable, NotFoundException } from '@nestjs/common';
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

    getById(driverId: string): Driver {
        const driver = this._drivers.find((element) => element.driverId === driverId);

        if (driver !== undefined) {
            return driver;
        }
        else {
            throw new NotFoundException(`Le conducteur avec l'id '${driverId}' n'existe pas`);
        }
    }
}
