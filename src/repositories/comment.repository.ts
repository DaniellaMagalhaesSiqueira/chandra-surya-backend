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

    public static getById(id: string){
        return getConnection()
        .getRepository(CommentEntity)
        .findOne({ id });
    }

    public static getByArticle(article: string){
        return getConnection()
        .getRepository(CommentEntity)
        .find({ article })
    }

    public static create(comment: Partial<Comment>){
        return getConnection()
        .getRepository(CommentEntity)
        .insert(comment);
    }

    public static update(id: string, comment:Partial<Comment>){
        return getConnection()
        .getRepository(CommentEntity)
        .update({ id }, comment);
    }

    public static remove(id: string){
        return getConnection()
        .getRepository(CommentEntity)
        .delete({ id });
    }
}