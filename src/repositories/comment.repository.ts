import { getConnection } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { CommentEntity } from "../entities/comment.entity";
import { Comment } from "../models/comment.model";

export class CommentRepository{
    public static getAll(){
        return getConnection()
        .getRepository(CommentEntity)
        .find();
    }

    public static getById(id: number){
        return getConnection()
        .getRepository(CommentEntity)
        .findOne({ id });
    }

    public static getByArticle(article: string){
        return getConnection()
        .getRepository(CommentEntity)
        .find({ article })
    }

    public static create(comment: QueryDeepPartialEntity<CommentEntity>){
        return getConnection()
        .getRepository(CommentEntity)
        .insert(comment);
    }

    public static update(id: number, comment: QueryDeepPartialEntity<CommentEntity>){
        //necessária conversão pois são chaves estrangeiras do banco e não podem chegar na service como strings
        // comment.article = Number (comment.article);
        // comment.user = Number (comment.user);
        return getConnection()
        .getRepository(CommentEntity)
        .update({ id }, comment);
    }

    public static remove(id: number){
        return getConnection()
        .getRepository(CommentEntity)
        .delete({ id });
    }
}