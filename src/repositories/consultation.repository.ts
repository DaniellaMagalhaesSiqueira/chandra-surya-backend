import { getConnection } from "typeorm";
import { Consultation } from "../models/consultation.model";
import { ConsultationEntity } from "../entities/consultation.entity";

export class ConsultationRepository{
    public static getAll(){
        return getConnection()
        .getRepository(ConsultationEntity)
        .find();
    }

    public static getById(id: number){
        return getConnection()
        .getRepository(ConsultationEntity)
        .findOne({ id });
    }

    public static create(consultation: Partial<Consultation>){
        return getConnection()
        .getRepository(ConsultationEntity)
        .insert(consultation);
    }

    public static update(id: number, consultation: Partial<Consultation>){
        return getConnection()
        .getRepository(ConsultationEntity)
        .update({ id }, consultation);
    }

    public static remove(id: number){
        return getConnection()
        .getRepository(ConsultationEntity)
        .delete({ id });
    }
}