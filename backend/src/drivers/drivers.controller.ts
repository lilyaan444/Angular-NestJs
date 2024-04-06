import { Controller, Get } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Observable, of } from 'rxjs';
import { Driver } from './drivers.types';


@Controller('drivers')
export class DriversController {
    constructor(private readonly _driversService: DriversService) {}

    @Get("all")
    getAll(): Observable<Driver[]> {
        return of(this._driversService.getAll());
    }
}
