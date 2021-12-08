import { Router, Request, Response } from "express";
import { ConsultationService } from "../services/consultation.service";


const router = Router();

const consultationService = new ConsultationService();

router.get('/', async (req: Request, res: Response) => {
    const consultation = await consultationService.getAll();
    res.status(200).send(consultation);
});

router.get('/id/:id', async (req: Request, res: Response) => {
    const consultation = await consultationService.getById(req.params.id);
    if(consultation) {
        res.status(200).send(consultation);
    } else {
        res.status(404).send({ message: 'Informações de consulta não encontradas!' });
    }
});

router.post('/create', async (req: Request, res: Response) => {
    const consultation = req.body;
    const consultationCreated = await consultationService.create(consultation);
    res.status(201).send(consultationCreated);
});

router.put('/update/:id', async (req: Request, res: Response) => {
    const partialConsultation = req.body;
    const resultUpdate = await consultationService.update(
        partialConsultation.professional,
        partialConsultation.theme,
        partialConsultation.description, 
        partialConsultation.contact, 
        partialConsultation.imageUrl, 
        partialConsultation.price, 
        req.params.id);
    if(resultUpdate) {
        res.status(200).send(resultUpdate);
    } else {
        res.status(404).send({ message: 'Informações de consulta não econtradas!' });
    }
});

router.delete('/remove/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const resultDelete = await consultationService.remove(id);
    if (resultDelete) res.status(200).send({ message: 'Informações de consulta excluído com sucesso!' });
    else res.status(404).send({ message: 'Informações de consulta não encontradas, não foi possível fazer a exclusão!' });
});

export default router;