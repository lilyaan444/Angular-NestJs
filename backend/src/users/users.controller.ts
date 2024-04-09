import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Observable, of } from 'rxjs';
import { User } from './users.types';

@Controller('users')
export class UsersController {
    constructor(private readonly _usersService: UsersService) {}

    @Get("all")
    getAllUsers(): Observable<User[]> {
        return of(this._usersService.getAll());
    }
}
