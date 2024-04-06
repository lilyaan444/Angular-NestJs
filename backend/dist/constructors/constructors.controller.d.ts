import { ConstructorsService } from './constructors.service';
import { Observable } from 'rxjs';
import { Constructor } from './constructors.types';
export declare class ConstructorsController {
    private readonly constructorsService;
    constructor(constructorsService: ConstructorsService);
    getAll(): Observable<Constructor[]>;
}
