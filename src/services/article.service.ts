import { Article } from "../models/article.model";
import { ArticleRepository } from "../repositories/article.repository";


export class ArticleService{
    
    constructor() {}

    getAll() {
        return ArticleRepository.getAll();
    }

    getById(id: number) {
        return ArticleRepository.getById(id);
    }

    create(article: Article) {
        return ArticleRepository.create(article);
    }

    async update(
        title: string, 
        author: string, 
        preview: string,
        text:string,
        theme: string,
        imageUrl: string,
        id: string
        ) {
        const article = await ArticleRepository.getById(parseInt(id));
        if(article) {
            await ArticleRepository.update(parseInt(id), { title, author, preview, text, theme, imageUrl });
            return true;
        } else {
            return false;
        }
    }

    async remove(id: string) {
        const article = await ArticleRepository.getById(parseInt(id));
        if (article) {
            await ArticleRepository.remove(parseInt(id));
            return true;
        } else {
            return false;
        }
    }
}