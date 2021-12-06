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
exports.ArticleService = void 0;
const article_repository_1 = require("../repositories/article.repository");
class ArticleService {
    constructor() { }
    getAll() {
        return article_repository_1.ArticleRepository.getAll();
    }
    getById(id) {
        return article_repository_1.ArticleRepository.getById(id);
    }
    create(article) {
        return article_repository_1.ArticleRepository.create(article);
    }
    update(title, author, preview, text, theme, imageUrl, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield article_repository_1.ArticleRepository.getById(parseInt(id));
            if (article) {
                yield article_repository_1.ArticleRepository.update(parseInt(id), { title, author, preview, text, theme, imageUrl });
                return true;
            }
            else {
                return false;
            }
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield article_repository_1.ArticleRepository.getById(parseInt(id));
            if (article) {
                yield article_repository_1.ArticleRepository.remove(parseInt(id));
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.ArticleService = ArticleService;
