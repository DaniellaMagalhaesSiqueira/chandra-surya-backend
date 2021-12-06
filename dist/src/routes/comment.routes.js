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
const comment_service_1 = require("../services/comment.service");
const router = (0, express_1.Router)();
const commentService = new comment_service_1.CommentService();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield commentService.getAll();
    res.status(200).send(comment);
}));
router.get('/id/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield commentService.getById(parseInt(req.params.id));
    if (comment) {
        res.status(200).send(comment);
    }
    else {
        res.status(404).send({ message: 'Comentário não encontrado!' });
    }
}));
router.get('/article/:article', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield commentService.getByArticle(parseInt(req.params.article));
    if (comments) {
        res.status(200).send(comments);
    }
    else {
        res.status(404).send({ message: "Comentários não encontrados" });
    }
}));
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = req.body;
    const commentCreated = yield commentService.create(comment);
    res.status(201).send(commentCreated);
}));
router.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const partialcomment = req.body;
    const resultUpdate = yield commentService.update(partialcomment.comment, partialcomment.user, partialcomment.article, req.params.id);
    if (resultUpdate) {
        res.status(200).send(resultUpdate);
    }
    else {
        res.status(404).send({ message: 'Comentário não econtrado!' });
    }
}));
router.delete('/remove/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const resultDelete = yield commentService.remove(id);
    if (resultDelete)
        res.status(200).send({ message: 'Comentário excluído com sucesso!' });
    else
        res.status(404).send({ message: 'Comentário não encontrado, não foi possível fazer a exclusão!' });
}));
exports.default = router;
