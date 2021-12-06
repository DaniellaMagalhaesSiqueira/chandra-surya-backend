"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
class UserRepository {
    static getAll() {
        return (0, typeorm_1.getConnection)()
            .getRepository(user_entity_1.UserEntity)
            .find();
    }
    static getById(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(user_entity_1.UserEntity)
            .findOne({ id });
    }
    static findByEmailAndPassword(email, password) {
        return (0, typeorm_1.getRepository)(user_entity_1.UserEntity)
            .findOne({ email, password });
    }
    static create(user) {
        return (0, typeorm_1.getConnection)()
            .getRepository(user_entity_1.UserEntity)
            .insert(user);
    }
    static update(id, user) {
        return (0, typeorm_1.getConnection)()
            .getRepository(user_entity_1.UserEntity)
            .update({ id }, user);
    }
    static remove(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(user_entity_1.UserEntity)
            .delete({ id });
    }
}
exports.UserRepository = UserRepository;
