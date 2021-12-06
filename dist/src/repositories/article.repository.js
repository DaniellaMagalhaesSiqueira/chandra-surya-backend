"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleRepository = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("../entities/article.entity");
class ArticleRepository {
    static getAll() {
        return (0, typeorm_1.getConnection)()
            .getRepository(article_entity_1.ArticleEntity)
            .find();
    }
    static getById(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(article_entity_1.ArticleEntity)
            .findOne({ id });
    }
    static create(article) {
        return (0, typeorm_1.getConnection)()
            .getRepository(article_entity_1.ArticleEntity)
            .insert(article);
    }
    static update(id, article) {
        return (0, typeorm_1.getConnection)()
            .getRepository(article_entity_1.ArticleEntity)
            .update({ id }, article);
    }
    static remove(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(article_entity_1.ArticleEntity)
            .delete({ id });
    }
}
exports.ArticleRepository = ArticleRepository;
