"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructorsFavoriteService = void 0;
const common_1 = require("@nestjs/common");
const constructors_service_1 = require("../constructors.service");
let ConstructorsFavoriteService = class ConstructorsFavoriteService {
    constructor(_constructorsService) {
        this._constructorsService = _constructorsService;
        this._constructorsFavorite = [];
    }
    getAll() {
        return this._constructorsFavorite;
    }
    create(constructorId) {
        const result = this._constructorsFavorite.find((element) => element.constructorId === constructorId);
        if (result === undefined) {
            const constructor = this._constructorsService.getById(constructorId);
            this._constructorsFavorite.push(constructor);
            return this._constructorsFavorite[this._constructorsFavorite.length - 1];
        }
        else {
            throw new common_1.ConflictException(`Le constructeur avec l'id '${constructorId}' est déjà ajouté aux favoris`);
        }
    }
    delete(constructorId) {
        const result = this._constructorsFavorite.find((element) => element.constructorId === constructorId);
        if (result !== undefined) {
            const constructorIndex = this._constructorsFavorite.findIndex((element) => element.constructorId === constructorId);
            const constructor = this._constructorsFavorite[constructorIndex];
            this._constructorsFavorite.splice(constructorIndex, 1);
            return constructor;
        }
        else {
            throw new common_1.NotFoundException(`Le constructeur avec l'id '${constructorId}' n'existe pas`);
        }
    }
};
exports.ConstructorsFavoriteService = ConstructorsFavoriteService;
exports.ConstructorsFavoriteService = ConstructorsFavoriteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [constructors_service_1.ConstructorsService])
], ConstructorsFavoriteService);
//# sourceMappingURL=constructors-favorite.service.js.map