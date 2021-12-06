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
const express_1 = require("express");
const article_service_1 = require("../services/article.service");
const router = (0, express_1.Router)();
const articleService = new article_service_1.ArticleService();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = yield articleService.getAll();
    res.status(200).send(article);
}));
router.get('/id/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = yield articleService.getById(parseInt(req.params.id));
    if (article) {
        res.status(200).send(article);
    }
    else {
        res.status(404).send({ message: 'Artigo não encontrado!' });
    }
}));
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = req.body;
    const articleCreated = yield articleService.create(article);
    res.status(201).send(articleCreated);
}));
router.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const partialArticle = req.body;
    const resultUpdate = yield articleService.update(partialArticle.title, partialArticle.author, partialArticle.preview, partialArticle.text, partialArticle.theme, partialArticle.imageUrl, req.params.id);
    if (resultUpdate) {
        res.status(200).send(resultUpdate);
    }
    else {
        res.status(404).send({ message: 'Artigo não econtrado!' });
    }
}));
router.delete('/remove/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const resultDelete = yield articleService.remove(id);
    if (resultDelete)
        res.status(200).send({ message: 'Artigo excluído com sucesso!' });
    else
        res.status(404).send({ message: 'Artigo não encontrado, não foi possível fazer a exclusão!' });
}));
exports.default = router;
