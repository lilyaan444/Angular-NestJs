import { DriversService } from './drivers.service';
import { Observable } from 'rxjs';
import { Driver } from './drivers.types';
export declare class DriversController {
    private readonly _driversService;
    constructor(_driversService: DriversService);
    getAll(): Observable<Driver[]>;
}
