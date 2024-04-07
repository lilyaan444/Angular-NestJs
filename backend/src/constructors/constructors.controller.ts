import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { ConstructorsService } from './constructors.service';
import { ConstructorsFavoriteService } from './constructors-favorite/constructors-favorite.service';
import { Observable, of } from 'rxjs';
import { Constructor } from './constructors.types';

@Controller('constructors')
export class ConstructorsController {
    constructor (
        private readonly _constructorsService: ConstructorsService, 
        private readonly _constructorsFavoriteService: ConstructorsFavoriteService
    ) {}

    @Get("all")
    getAllConstructors(): Observable<Constructor[]> {
        return of(this._constructorsService.getAll());
    }

    @Get("favorite/all")
    getAllFavorite(): Observable<Constructor[]> {
        return of(this._constructorsFavoriteService.getAll());
    }

    @Post("favorite/:id")
    createFavorite(@Param("id") constructorId: string): Observable<Constructor> {
        return of(this._constructorsFavoriteService.create(constructorId));
    }

    @Delete("favorite/:id")
    deleteFavorite(@Param("id") constructorId: string): Observable<Constructor> {
        return of(this._constructorsFavoriteService.delete(constructorId));
    }
}
