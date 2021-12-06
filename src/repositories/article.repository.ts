import { getConnection } from "typeorm";
import { ArticleEntity } from "../entities/article.entity";
import { Article } from '../models/article.model';


export class ArticleRepository{
    public static getAll(){
        return getConnection()
        .getRepository(ArticleEntity)
        .find();
    }

    public static getById(id: number){
        return getConnection()
        .getRepository(ArticleEntity)
        .findOne({ id });
    }

    public static create(article: Partial<Article>){
        return getConnection()
        .getRepository(ArticleEntity)
        .insert(article);
    }

    public static update(id: number, article: Partial<Article>){
        return getConnection()
        .getRepository(ArticleEntity)
        .update({ id }, article);
    }

    public static remove(id: number){
        return getConnection()
        .getRepository(ArticleEntity)
        .delete({ id });
    }

}