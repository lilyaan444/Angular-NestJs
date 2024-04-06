import { Injectable } from '@nestjs/common';
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
}
