"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = void 0;
const user_repository_1 = require("../repositories/user.repository");
class usersService {
    constructor() { }
    getAll() {
        return user_repository_1.UserRepository.getAll();
    }
    getById(id) {
        return user_repository_1.UserRepository.getById(id);
    }
    getByEmailAndPassword(email, password) {
        return user_repository_1.UserRepository.findByEmailAndPassword(email, password);
    }
    create(user) {
        return user_repository_1.UserRepository.create(user);
    }
    update(isAdmin, name, email, password, cpf, birthDate, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_repository_1.UserRepository.getById(parseInt(id));
            if (user) {
                yield user_repository_1.UserRepository.update(parseInt(id), { isAdmin, name, email, password, cpf, birthDate });
                return true;
            }
            else {
                return false;
            }
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_repository_1.UserRepository.getById(parseInt(id));
            if (user) {
                yield user_repository_1.UserRepository.remove(parseInt(id));
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.usersService = usersService;
