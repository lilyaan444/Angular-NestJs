import { Injectable, NotFoundException } from '@nestjs/common';
import { CONSTRUCTORS } from 'src/data/constructors';
import { Constructor } from './constructors.types';

@Injectable()
export class ConstructorsService {
    private _constructors: Constructor[] = [];

    constructor() {
        this._constructors = CONSTRUCTORS;
    }

    getAll(): Constructor[] {
        return this._constructors;
    }

    getById(constructorId: string): Constructor {
        const constructor = this._constructors.find((element) => element.constructorId === constructorId);

        if (constructor !== undefined) {
            return constructor;
        }
        else {
            throw new NotFoundException(`Le constructeur avec l'id '${constructorId}' n'existe pas`);
        }
    }
}
