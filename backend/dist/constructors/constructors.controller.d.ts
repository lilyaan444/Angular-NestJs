import { ConstructorsService } from './constructors.service';
import { ConstructorsFavoriteService } from './constructors-favorite/constructors-favorite.service';
import { Observable } from 'rxjs';
import { Constructor } from './constructors.types';
export declare class ConstructorsController {
    private readonly _constructorsService;
    private readonly _constructorsFavoriteService;
    constructor(_constructorsService: ConstructorsService, _constructorsFavoriteService: ConstructorsFavoriteService);
    getAllConstructors(): Observable<Constructor[]>;
    getAllFavorite(): Observable<Constructor[]>;
    createFavorite(constructorId: string): Observable<Constructor>;
    deleteFavorite(constructorId: string): Observable<Constructor>;
}
