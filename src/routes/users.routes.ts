import { Router, Request, Response } from 'express';
import { usersService } from '../services/user.service';

const router = Router();

const userService = new usersService();

router.get('/', async (req: Request, res: Response) => {
    const users = await userService.getAll();
    res.status(200).send(users);
});

router.get('/id/:id', async (req: Request, res: Response) => {
    const users = await userService.getById(parseInt(req.params.id));
    if(users) {
        res.status(200).send(users);
    } else {
        res.status(404).send({ message: 'Usuário não encontrado!' });
    }
});

router.post('/create', async (req: Request, res: Response) => {
    const users = req.body;
    const usersCreated = await userService.create(users);
    res.status(201).send(usersCreated);
});

router.post('/authenticate', async (req: Request, res: Response) => {
    const user = await userService.getByEmailAndPassword(req.body.email, req.body.password);
    if(user){
        res.status(200).send(user);
    }else{
        res.status(404).send({message: 'Usuário/senha inválidos!'});
    }
});

router.put('/update/:id', async (req: Request, res: Response) => {
    const partialusers = req.body;
    const resultUpdate = await userService.update(
        partialusers.isAdmin,
        partialusers.name, 
        partialusers.email,
        partialusers.password,
        partialusers.cpf,
        partialusers.birthDate,
        req.params.id
        );
    if(resultUpdate) {
        res.status(200).send(resultUpdate);
    } else {
        res.status(404).send({ message: 'Usuário não econtrado!' });
    }
});

router.delete('/remove/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const resultDelete = await userService.remove(id);
    if (resultDelete) res.status(200).send({ message: 'Usuário excluído com sucesso!' });
    else res.status(404).send({ message: 'Usuário não encontrado, não foi possível fazer a exclusão!' });
});

export default router;