"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationRepository = void 0;
const typeorm_1 = require("typeorm");
const consultation_entity_1 = require("../entities/consultation.entity");
class ConsultationRepository {
    static getAll() {
        return (0, typeorm_1.getConnection)()
            .getRepository(consultation_entity_1.ConsultationEntity)
            .find();
    }
    static getById(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(consultation_entity_1.ConsultationEntity)
            .findOne({ id });
    }
    static create(consultation) {
        return (0, typeorm_1.getConnection)()
            .getRepository(consultation_entity_1.ConsultationEntity)
            .insert(consultation);
    }
    static update(id, consultation) {
        return (0, typeorm_1.getConnection)()
            .getRepository(consultation_entity_1.ConsultationEntity)
            .update({ id }, consultation);
    }
    static remove(id) {
        return (0, typeorm_1.getConnection)()
            .getRepository(consultation_entity_1.ConsultationEntity)
            .delete({ id });
    }
}
exports.ConsultationRepository = ConsultationRepository;
