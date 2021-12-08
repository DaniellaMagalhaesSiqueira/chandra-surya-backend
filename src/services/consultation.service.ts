
import { Consultation } from "../models/consultation.model";
import { ConsultationRepository } from "../repositories/consultation.repository";


export class ConsultationService{
    constructor() {}

    getAll() {
        return ConsultationRepository.getAll();
    }

    getById(id: string) {
        return ConsultationRepository.getById(id);
    }

    create(consultation: Partial<Consultation>) {
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
        const consultation = await ConsultationRepository.getById(id);
        if(consultation) {
            await ConsultationRepository.update(id, { professional, theme, description, contact, imageUrl, price});
            return true;
        } else {
            return false;
        }
    }

    async remove(id: string) {
        const consultation = await ConsultationRepository.getById(id);
        if (consultation) {
            await ConsultationRepository.remove(id);
            return true;
        } else {
            return false;
        }
    }
}