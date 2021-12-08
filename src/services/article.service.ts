import { Article } from "../models/article.model";
import { ArticleRepository } from "../repositories/article.repository";


export class ArticleService{
    
    constructor() {}

    getAll() {
        return ArticleRepository.getAll();
    }

    getById(id: string) {
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
        const article = await ArticleRepository.getById(id);
        if(article) {
            await ArticleRepository.update(id, { title, author, preview, text, theme, imageUrl });
            return true;
        } else {
            return false;
        }
    }

    async remove(id: string) {
        const article = await ArticleRepository.getById(id);
        if (article) {
            await ArticleRepository.remove(id);
            return true;
        } else {
            return false;
        }
    }
}