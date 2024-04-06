import { Driver } from './drivers.types';
export declare class DriversService {
    private _drivers;
    constructor();
    getAll(): Driver[];
    getById(driverId: string): Driver;
}
