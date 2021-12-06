"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationEntity = void 0;
const typeorm_1 = require("typeorm");
let ConsultationEntity = class ConsultationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], ConsultationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'professional', type: 'varchar', length: 100 })
], ConsultationEntity.prototype, "professional", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'imageurl', type: 'varchar', length: 255 })
], ConsultationEntity.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', type: 'varchar', length: 255 })
], ConsultationEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'theme', type: 'varchar', length: 100 })
], ConsultationEntity.prototype, "theme", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contact', type: 'varchar', length: 255 })
], ConsultationEntity.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'price', type: "float" })
], ConsultationEntity.prototype, "price", void 0);
ConsultationEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'consultations' })
], ConsultationEntity);
exports.ConsultationEntity = ConsultationEntity;
