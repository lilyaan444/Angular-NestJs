import { Constructor } from './constructors.types';
export declare class ConstructorsService {
    private _constructors;
    constructor();
    getAll(): Constructor[];
    getById(constructorId: string): Constructor;
}
