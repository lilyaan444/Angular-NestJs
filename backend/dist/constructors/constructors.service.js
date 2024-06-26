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
exports.ConstructorsService = void 0;
const common_1 = require("@nestjs/common");
const constructors_1 = require("../data/constructors");
let ConstructorsService = class ConstructorsService {
    constructor() {
        this._constructors = [];
        this._constructors = constructors_1.CONSTRUCTORS;
    }
    getAll() {
        return this._constructors;
    }
    getById(constructorId) {
        const constructor = this._constructors.find((element) => element.constructorId === constructorId);
        if (constructor !== undefined) {
            return constructor;
        }
        else {
            throw new common_1.NotFoundException(`Le constructeur avec l'id '${constructorId}' n'existe pas`);
        }
    }
};
exports.ConstructorsService = ConstructorsService;
exports.ConstructorsService = ConstructorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ConstructorsService);
//# sourceMappingURL=constructors.service.js.map