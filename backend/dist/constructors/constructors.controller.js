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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructorsController = void 0;
const common_1 = require("@nestjs/common");
const constructors_service_1 = require("./constructors.service");
const constructors_favorite_service_1 = require("./constructors-favorite/constructors-favorite.service");
const rxjs_1 = require("rxjs");
let ConstructorsController = class ConstructorsController {
    constructor(_constructorsService, _constructorsFavoriteService) {
        this._constructorsService = _constructorsService;
        this._constructorsFavoriteService = _constructorsFavoriteService;
    }
    getAllConstructors() {
        return (0, rxjs_1.of)(this._constructorsService.getAll());
    }
    getAllFavorite() {
        return (0, rxjs_1.of)(this._constructorsFavoriteService.getAll());
    }
    createFavorite(constructorId) {
        return (0, rxjs_1.of)(this._constructorsFavoriteService.create(constructorId));
    }
    deleteFavorite(constructorId) {
        return (0, rxjs_1.of)(this._constructorsFavoriteService.delete(constructorId));
    }
};
exports.ConstructorsController = ConstructorsController;
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], ConstructorsController.prototype, "getAllConstructors", null);
__decorate([
    (0, common_1.Get)("favorite/all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], ConstructorsController.prototype, "getAllFavorite", null);
__decorate([
    (0, common_1.Post)("favorite/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], ConstructorsController.prototype, "createFavorite", null);
__decorate([
    (0, common_1.Delete)("favorite/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], ConstructorsController.prototype, "deleteFavorite", null);
exports.ConstructorsController = ConstructorsController = __decorate([
    (0, common_1.Controller)('constructors'),
    __metadata("design:paramtypes", [constructors_service_1.ConstructorsService,
        constructors_favorite_service_1.ConstructorsFavoriteService])
], ConstructorsController);
//# sourceMappingURL=constructors.controller.js.map