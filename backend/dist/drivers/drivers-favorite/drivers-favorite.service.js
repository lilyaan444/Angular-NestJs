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
exports.DriversFavoriteService = void 0;
const common_1 = require("@nestjs/common");
const drivers_service_1 = require("../drivers.service");
let DriversFavoriteService = class DriversFavoriteService {
    constructor(_driversService) {
        this._driversService = _driversService;
        this._driversFavorite = [];
    }
    getAll() {
        return this._driversFavorite;
    }
    create(driverId) {
        const result = this._driversFavorite.find((element) => element.driverId === driverId);
        if (result === undefined) {
            const driver = this._driversService.getById(driverId);
            this._driversFavorite.push(driver);
            return this._driversFavorite[this._driversFavorite.length - 1];
        }
        else {
            throw new common_1.ConflictException(`Le conducteur avec l'id '${driverId}' est déjà ajouté aux favoris`);
        }
    }
};
exports.DriversFavoriteService = DriversFavoriteService;
exports.DriversFavoriteService = DriversFavoriteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [drivers_service_1.DriversService])
], DriversFavoriteService);
//# sourceMappingURL=drivers-favorite.service.js.map