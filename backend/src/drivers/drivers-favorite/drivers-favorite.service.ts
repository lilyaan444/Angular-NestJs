import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { DriversService } from '../drivers.service';
import { Driver } from '../drivers.types';

@Injectable()
export class DriversFavoriteService {
    private _driversFavorite: Driver[] = [];

    constructor (private readonly _driversService: DriversService) {}

    getAll(): Driver[] {
        return this._driversFavorite;
    }

    create(driverId: string): Driver {
        const result = this._driversFavorite.find((element) => element.driverId === driverId); 
        
        if (result === undefined) {
            const driver = this._driversService.getById(driverId);

            this._driversFavorite.push(driver);

            return this._driversFavorite[this._driversFavorite.length - 1];
        }
        else {
            throw new ConflictException(`Le conducteur avec l'id '${driverId}' est déjà ajouté aux favoris`);
        }
    }

    delete(driverId: string): Driver {
        const result = this._driversFavorite.find((element) => element.driverId === driverId); 
        
        if (result !== undefined) {
            const driverIndex = this._driversFavorite.findIndex((element) => element.driverId === driverId);
            const driver = this._driversFavorite[driverIndex];

            this._driversFavorite.splice(driverIndex, 1);

            return driver;
        }
        else {
            throw new NotFoundException(`Le conducteur avec l'id '${driverId}' n'existe pas`);
        }
    }
}
