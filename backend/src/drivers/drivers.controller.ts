import { Controller, Get, Post, Param } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversFavoriteService } from './drivers-favorite/drivers-favorite.service';
import { Observable, of } from 'rxjs';
import { Driver } from './drivers.types';

@Controller('drivers')
export class DriversController {
    constructor(private readonly _driversService: DriversService, private readonly _driversFavoriteService: DriversFavoriteService) {}

    @Get()
    getAllDrivers(): Observable<Driver[]> {
        return of(this._driversService.getAll());
    }

    @Get("favorite")
    getAllFavorite(): Observable<Driver[]> {
        return of(this._driversFavoriteService.getAll());
    }

    @Get("favorite/:id")
    createFavorite(@Param("id") driverId: string): Observable<Driver> {
        return of(this._driversFavoriteService.create(driverId));
    }
}