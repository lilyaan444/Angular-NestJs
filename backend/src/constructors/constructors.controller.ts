import { Controller, Get } from '@nestjs/common';
import { ConstructorsService } from './constructors.service';
import { Observable, of } from 'rxjs';
import { Constructor } from './constructors.types';

@Controller('constructors')
export class ConstructorsController {
    constructor (private readonly constructorsService: ConstructorsService) {}

    @Get("all")
    getAll(): Observable<Constructor[]> {
        return of(this.constructorsService.getAll());
    }
}
