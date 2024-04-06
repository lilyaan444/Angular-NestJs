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
exports.DriversService = void 0;
const common_1 = require("@nestjs/common");
const drivers_1 = require("../data/drivers");
let DriversService = class DriversService {
    constructor() {
        this._drivers = [];
        this._drivers = drivers_1.DRIVERS;
    }
    getAll() {
        return this._drivers;
    }
    getById(driverId) {
        const driver = this._drivers.find((element) => element.driverId === driverId);
        if (driver !== undefined) {
            return driver;
        }
        else {
            throw new common_1.NotFoundException(`Le conducteur avec l'id '${driverId}' n'existe pas`);
        }
    }
};
exports.DriversService = DriversService;
exports.DriversService = DriversService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DriversService);
//# sourceMappingURL=drivers.service.js.map