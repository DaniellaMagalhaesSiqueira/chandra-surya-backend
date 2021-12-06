import { Consultation } from "../models/consultation.model";
import { ConsultationRepository } from "../repositories/consultation.repository";


export class ConsultationService{
    constructor() {}

    getAll() {
        return ConsultationRepository.getAll();
    }

    getById(id: number) {
        return ConsultationRepository.getById(id);
    }

    create(consultation: Consultation) {
        return ConsultationRepository.create(consultation);
    }

    async update(
        professional: string,
        theme: string,
        description: string, 
        contact: string, 
        imageUrl: string, 
        price: number | undefined, 
        id: string
        ) {
        const consultation = await ConsultationRepository.getById(parseInt(id));
        if(consultation) {
            await ConsultationRepository.update(parseInt(id), { professional, theme, description, contact, imageUrl, price});
            return true;
        } else {
            return false;
        }
    }

    async remove(id: string) {
        const consultation = await ConsultationRepository.getById(parseInt(id));
        if (consultation) {
            await ConsultationRepository.remove(parseInt(id));
            return true;
        } else {
            return false;
        }
    }
}