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
exports.DriversController = void 0;
const common_1 = require("@nestjs/common");
const drivers_service_1 = require("./drivers.service");
const drivers_favorite_service_1 = require("./drivers-favorite/drivers-favorite.service");
const rxjs_1 = require("rxjs");
let DriversController = class DriversController {
    constructor(_driversService, _driversFavoriteService) {
        this._driversService = _driversService;
        this._driversFavoriteService = _driversFavoriteService;
    }
    getAllDrivers() {
        return (0, rxjs_1.of)(this._driversService.getAll());
    }
    getAllFavorite() {
        return (0, rxjs_1.of)(this._driversFavoriteService.getAll());
    }
    createFavorite(driverId) {
        return (0, rxjs_1.of)(this._driversFavoriteService.create(driverId));
    }
    deleteFavorite(driverId) {
        return (0, rxjs_1.of)(this._driversFavoriteService.delete(driverId));
    }
};
exports.DriversController = DriversController;
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], DriversController.prototype, "getAllDrivers", null);
__decorate([
    (0, common_1.Get)("favorite/all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], DriversController.prototype, "getAllFavorite", null);
__decorate([
    (0, common_1.Post)("favorite/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], DriversController.prototype, "createFavorite", null);
__decorate([
    (0, common_1.Delete)("favorite/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], DriversController.prototype, "deleteFavorite", null);
exports.DriversController = DriversController = __decorate([
    (0, common_1.Controller)('drivers'),
    __metadata("design:paramtypes", [drivers_service_1.DriversService,
        drivers_favorite_service_1.DriversFavoriteService])
], DriversController);
//# sourceMappingURL=drivers.controller.js.map