import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { ConstructorsService } from '../constructors.service';
import { Constructor } from '../constructors.types';

@Injectable()
export class ConstructorsFavoriteService {
    private _constructorsFavorite: Constructor[] = [];

    constructor(private readonly _constructorsService: ConstructorsService) {}

    getAll(): Constructor[] {
        return this._constructorsFavorite;
    }

    create(constructorId: string): Constructor {
        const result = this._constructorsFavorite.find((element) => element.constructorId === constructorId); 
        
        if (result === undefined) {
            const constructor = this._constructorsService.getById(constructorId);

            this._constructorsFavorite.push(constructor);

            return this._constructorsFavorite[this._constructorsFavorite.length - 1];
        }
        else {
            throw new ConflictException(`Le constructeur avec l'id '${constructorId}' est déjà ajouté aux favoris`);
        }
    }

    delete(constructorId: string): Constructor {
        const result = this._constructorsFavorite.find((element) => element.constructorId === constructorId); 
        
        if (result !== undefined) {
            const constructorIndex = this._constructorsFavorite.findIndex((element) => element.constructorId === constructorId);
            const constructor = this._constructorsFavorite[constructorIndex];

            this._constructorsFavorite.splice(constructorIndex, 1);

            return constructor;
        }
        else {
            throw new NotFoundException(`Le constructeur avec l'id '${constructorId}' n'existe pas`);
        }
    }
}
