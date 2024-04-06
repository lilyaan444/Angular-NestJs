import { DriversService } from './drivers.service';
import { DriversFavoriteService } from './drivers-favorite/drivers-favorite.service';
import { Observable } from 'rxjs';
import { Driver } from './drivers.types';
export declare class DriversController {
    private readonly _driversService;
    private readonly _driversFavoriteService;
    constructor(_driversService: DriversService, _driversFavoriteService: DriversFavoriteService);
    getAllDrivers(): Observable<Driver[]>;
    getAllFavorite(): Observable<Driver[]>;
    createFavorite(driverId: string): Observable<Driver>;
}
