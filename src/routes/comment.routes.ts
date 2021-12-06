import { Router, Request, Response } from "express";
import { CommentService } from "../services/comment.service";


const router = Router();

const commentService = new CommentService();

router.get('/', async (req: Request, res: Response) => {
    const comment = await commentService.getAll();
    res.status(200).send(comment);
});

router.get('/id/:id', async (req: Request, res: Response) => {
    const comment = await commentService.getById(parseInt(req.params.id));
    if(comment) {
        res.status(200).send(comment);
    } else {
        res.status(404).send({ message: 'Comentário não encontrado!' });
    }
});

router.get('/article/:article', async (req: Request, res: Response)=>{
    const comments = await commentService.getByArticle(parseInt(req.params.article));
        if(comments){
            res.status(200).send(comments);
        }else{
            res.status(404).send({message: "Comentários não encontrados"});
        }
});

router.post('/create', async (req: Request, res: Response) => {
    const comment = req.body;
    const commentCreated = await commentService.create(comment);
    res.status(201).send(commentCreated);
});

router.put('/update/:id', async (req: Request, res: Response) => {
    const partialcomment = req.body;
    const resultUpdate = await commentService.update(
        partialcomment.comment,
        partialcomment.user,
        partialcomment.article,
        req.params.id
        );
    if(resultUpdate) {
        res.status(200).send(resultUpdate);
    } else {
        res.status(404).send({ message: 'Comentário não econtrado!' });
    }
});

router.delete('/remove/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const resultDelete = await commentService.remove(id);
    if (resultDelete) res.status(200).send({ message: 'Comentário excluído com sucesso!' });
    else res.status(404).send({ message: 'Comentário não encontrado, não foi possível fazer a exclusão!' });
});

export default router;