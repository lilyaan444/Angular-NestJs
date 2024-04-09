import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { User } from './users.types';
export declare class UsersController {
    private readonly _usersService;
    constructor(_usersService: UsersService);
    getAllUsers(): Observable<User[]>;
}
