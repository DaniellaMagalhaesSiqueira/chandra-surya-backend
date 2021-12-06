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
const user_service_1 = require("../services/user.service");
const router = (0, express_1.Router)();
const userService = new user_service_1.usersService();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userService.getAll();
    res.status(200).send(users);
}));
router.get('/id/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userService.getById(parseInt(req.params.id));
    if (users) {
        res.status(200).send(users);
    }
    else {
        res.status(404).send({ message: 'Usuário não encontrado!' });
    }
}));
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = req.body;
    const usersCreated = yield userService.create(users);
    res.status(201).send(usersCreated);
}));
router.post('/authenticate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userService.getByEmailAndPassword(req.body.email, req.body.password);
    if (user) {
        res.status(200).send(user);
    }
    else {
        res.status(404).send({ message: 'Usuário/senha inválidos!' });
    }
}));
router.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const partialusers = req.body;
    const resultUpdate = yield userService.update(partialusers.isAdmin, partialusers.name, partialusers.email, partialusers.password, partialusers.cpf, partialusers.birthDate, req.params.id);
    if (resultUpdate) {
        res.status(200).send(resultUpdate);
    }
    else {
        res.status(404).send({ message: 'Usuário não econtrado!' });
    }
}));
router.delete('/remove/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const resultDelete = yield userService.remove(id);
    if (resultDelete)
        res.status(200).send({ message: 'Usuário excluído com sucesso!' });
    else
        res.status(404).send({ message: 'Usuário não encontrado, não foi possível fazer a exclusão!' });
}));
exports.default = router;
