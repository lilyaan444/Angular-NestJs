import { Injectable } from '@nestjs/common';
import { USERS } from 'src/data/users';
import { User } from './users.types';

@Injectable()
export class UsersService {
    private _users: User[] = [];
    
    constructor() {
        this._users = USERS;
    }

    getAll(): User[] {
        return this._users;
    }
}
