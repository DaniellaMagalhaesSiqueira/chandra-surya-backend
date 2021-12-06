"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("../entities/article.entity");
const comment_entity_1 = require("../entities/comment.entity");
const consultation_entity_1 = require("../entities/consultation.entity");
const user_entity_1 = require("../entities/user.entity");
exports.connection = (0, typeorm_1.createConnection)({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "chandra_surya",
    logging: true,
    entities: [
        user_entity_1.UserEntity,
        article_entity_1.ArticleEntity,
        comment_entity_1.CommentEntity,
        consultation_entity_1.ConsultationEntity,
    ]
});
