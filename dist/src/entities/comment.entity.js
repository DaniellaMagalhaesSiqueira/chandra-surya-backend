"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentEntity = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
const user_entity_1 = require("./user.entity");
let CommentEntity = class CommentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' })
], CommentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.UserEntity, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' })
], CommentEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'comment', type: 'text' })
], CommentEntity.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => article_entity_1.ArticleEntity, article => article.id),
    (0, typeorm_1.JoinColumn)({ name: 'article_id' })
], CommentEntity.prototype, "article", void 0);
CommentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'comments_article' })
], CommentEntity);
exports.CommentEntity = CommentEntity;
