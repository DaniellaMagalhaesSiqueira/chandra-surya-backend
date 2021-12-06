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
const consultation_service_1 = require("../services/consultation.service");
const router = (0, express_1.Router)();
const consultationService = new consultation_service_1.ConsultationService();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const consultation = yield consultationService.getAll();
    res.status(200).send(consultation);
}));
router.get('/id/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const consultation = yield consultationService.getById(parseInt(req.params.id));
    if (consultation) {
        res.status(200).send(consultation);
    }
    else {
        res.status(404).send({ message: 'Informações de consulta não encontradas!' });
    }
}));
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const consultation = req.body;
    const consultationCreated = yield consultationService.create(consultation);
    res.status(201).send(consultationCreated);
}));
router.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const partialConsultation = req.body;
    const resultUpdate = yield consultationService.update(partialConsultation.professional, partialConsultation.theme, partialConsultation.description, partialConsultation.contact, partialConsultation.imageUrl, partialConsultation.price, req.params.id);
    if (resultUpdate) {
        res.status(200).send(resultUpdate);
    }
    else {
        res.status(404).send({ message: 'Informações de consulta não econtradas!' });
    }
}));
router.delete('/remove/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const resultDelete = yield consultationService.remove(id);
    if (resultDelete)
        res.status(200).send({ message: 'Informações de consulta excluído com sucesso!' });
    else
        res.status(404).send({ message: 'Informações de consulta não encontradas, não foi possível fazer a exclusão!' });
}));
exports.default = router;
