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
exports.CommentService = void 0;
const comment_repository_1 = require("../repositories/comment.repository");
class CommentService {
    constructor() { }
    getAll() {
        return comment_repository_1.CommentRepository.getAll();
    }
    getById(id) {
        return comment_repository_1.CommentRepository.getById(id);
    }
    getByArticle(article) {
        return comment_repository_1.CommentRepository.getByArticle(article);
    }
    create(comment) {
        return comment_repository_1.CommentRepository.create(comment);
    }
    update(comment, user, article, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment_get = yield comment_repository_1.CommentRepository.getById(parseInt(id));
            if (comment_get) {
                yield comment_repository_1.CommentRepository.update(parseInt(id), { comment, user, article });
                return true;
            }
            else {
                return false;
            }
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield comment_repository_1.CommentRepository.getById(parseInt(id));
            if (article) {
                yield comment_repository_1.CommentRepository.remove(parseInt(id));
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.CommentService = CommentService;
