import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { CommentEntity } from "../entities/comment.entity";
import { Comment } from "../models/comment.model";
import { CommentRepository } from "../repositories/comment.repository";

export class CommentService{
    constructor() {}

    getAll() {
        return CommentRepository.getAll();
    }

    getById(id: number) {
        return CommentRepository.getById(id);
    }

    getByArticle(article: string){
        return CommentRepository.getByArticle(article);
    }

    create(comment: QueryDeepPartialEntity<CommentEntity>) {
        return CommentRepository.create(comment);
    }

    async update(comment: string, user: string, article: string, id: string) {
        const comment_get = await CommentRepository.getById(parseInt(id));
        if(comment_get) {
            await CommentRepository.update(parseInt(id), { comment,  user, article });
            return true;
        } else {
            return false;
        }
    }

    async remove(id: string) {
        const article = await CommentRepository.getById(parseInt(id));
        if (article) {
            await CommentRepository.remove(parseInt(id));
            return true;
        } else {
            return false;
        }
    }
}