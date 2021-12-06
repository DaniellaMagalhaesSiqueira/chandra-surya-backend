import { Router, Request, Response } from "express";
import { ArticleService } from "../services/article.service";


const router = Router();

const articleService = new ArticleService();

router.get('/', async (req: Request, res: Response) => {
    const article = await articleService.getAll();
    res.status(200).send(article);
});

router.get('/id/:id', async (req: Request, res: Response) => {
    const article = await articleService.getById(parseInt(req.params.id));
    if(article) {
        res.status(200).send(article);
    } else {
        res.status(404).send({ message: 'Artigo não encontrado!' });
    }
});

router.post('/create', async (req: Request, res: Response) => {
    const article = req.body;
    const articleCreated = await articleService.create(article);
    res.status(201).send(articleCreated);
});

router.put('/update/:id', async (req: Request, res: Response) => {
    const partialArticle = req.body;
    const resultUpdate = await articleService.update(
        partialArticle.title, 
        partialArticle.author, 
        partialArticle.preview,
        partialArticle.text,
        partialArticle.theme,
        partialArticle.imageUrl,
        req.params.id
        );
    if(resultUpdate) {
        res.status(200).send(resultUpdate);
    } else {
        res.status(404).send({ message: 'Artigo não econtrado!' });
    }
});

router.delete('/remove/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const resultDelete = await articleService.remove(id);
    if (resultDelete) res.status(200).send({ message: 'Artigo excluído com sucesso!' });
    else res.status(404).send({ message: 'Artigo não encontrado, não foi possível fazer a exclusão!' });
});

export default router;