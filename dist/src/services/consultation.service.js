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
exports.ConsultationService = void 0;
const consultation_repository_1 = require("../repositories/consultation.repository");
class ConsultationService {
    constructor() { }
    getAll() {
        return consultation_repository_1.ConsultationRepository.getAll();
    }
    getById(id) {
        return consultation_repository_1.ConsultationRepository.getById(id);
    }
    create(consultation) {
        return consultation_repository_1.ConsultationRepository.create(consultation);
    }
    update(professional, theme, description, contact, imageUrl, price, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const consultation = yield consultation_repository_1.ConsultationRepository.getById(parseInt(id));
            if (consultation) {
                yield consultation_repository_1.ConsultationRepository.update(parseInt(id), { professional, theme, description, contact, imageUrl, price });
                return true;
            }
            else {
                return false;
            }
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const consultation = yield consultation_repository_1.ConsultationRepository.getById(parseInt(id));
            if (consultation) {
                yield consultation_repository_1.ConsultationRepository.remove(parseInt(id));
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.ConsultationService = ConsultationService;
