import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversFavoriteService } from './drivers-favorite/drivers-favorite.service';
import { Observable, of } from 'rxjs';
import { Driver } from './drivers.types';

@Controller('drivers')
export class DriversController {
    constructor(
        private readonly _driversService: DriversService, 
        private readonly _driversFavoriteService: DriversFavoriteService
    ) {}

    @Get("all")
    getAllDrivers(): Observable<Driver[]> {
        return of(this._driversService.getAll());
    }

    @Get("favorite/all")
    getAllFavorite(): Observable<Driver[]> {
        return of(this._driversFavoriteService.getAll());
    }

    @Post("favorite/:id")
    createFavorite(@Param("id") driverId: string): Observable<Driver> {
        return of(this._driversFavoriteService.create(driverId));
    }

    @Delete("favorite/:id")
    deleteFavorite(@Param("id") driverId: string): Observable<Driver> {
        return of(this._driversFavoriteService.delete(driverId));
    }
}