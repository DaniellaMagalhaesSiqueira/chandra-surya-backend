"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleEntity = void 0;
const typeorm_1 = require("typeorm");
let ArticleEntity = class ArticleEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' })
], ArticleEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title', type: 'varchar', length: 255 })
], ArticleEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'author', type: 'varchar', length: 100 })
], ArticleEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'preview', type: 'varchar', length: 255 })
], ArticleEntity.prototype, "preview", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'text', type: 'text' })
], ArticleEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'theme', type: 'varchar', length: 100 })
], ArticleEntity.prototype, "theme", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'imageurl', type: 'varchar', length: 255 })
], ArticleEntity.prototype, "imageUrl", void 0);
ArticleEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'articles' })
], ArticleEntity);
exports.ArticleEntity = ArticleEntity;
