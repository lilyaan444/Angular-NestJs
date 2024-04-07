import { DriversService } from '../drivers.service';
import { Driver } from '../drivers.types';
export declare class DriversFavoriteService {
    private readonly _driversService;
    private _driversFavorite;
    constructor(_driversService: DriversService);
    getAll(): Driver[];
    create(driverId: string): Driver;
    delete(driverId: string): Driver;
}
