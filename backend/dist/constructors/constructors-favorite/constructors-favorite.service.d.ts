import { ConstructorsService } from '../constructors.service';
import { Constructor } from '../constructors.types';
export declare class ConstructorsFavoriteService {
    private readonly _constructorsService;
    private _constructorsFavorite;
    constructor(_constructorsService: ConstructorsService);
    getAll(): Constructor[];
    create(constructorId: string): Constructor;
    delete(constructorId: string): Constructor;
}
