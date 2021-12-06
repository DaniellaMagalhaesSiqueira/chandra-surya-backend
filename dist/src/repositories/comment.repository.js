"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRepository = void 0;
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("../entities/comment.entity");
class CommentRepository {
    static getAll() {
        return (0, typeorm_1.getConnection)()
            .getRepository(comment_entity_1.CommentEntity)
            .find();
    }
    static getById(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(comment_entity_1.CommentEntity)
            .findOne({ id });
    }
    static getByArticle(article) {
        return (0, typeorm_1.getConnection)()
            .getRepository(comment_entity_1.CommentEntity)
            .find({ article });
    }
    static create(comment) {
        return (0, typeorm_1.getConnection)()
            .getRepository(comment_entity_1.CommentEntity)
            .insert(comment);
    }
    static update(id, comment) {
        //necessária conversão pois são chaves estrangeiras do banco e não podem chegar na service como strings
        // comment.article = Number (comment.article);
        // comment.user = Number (comment.user);
        return (0, typeorm_1.getConnection)()
            .getRepository(comment_entity_1.CommentEntity)
            .update({ id }, comment);
    }
    static remove(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(comment_entity_1.CommentEntity)
            .delete({ id });
    }
}
exports.CommentRepository = CommentRepository;
