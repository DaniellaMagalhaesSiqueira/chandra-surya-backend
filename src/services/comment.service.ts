import { Comment } from "../models/comment.model";
import { CommentRepository } from "../repositories/comment.repository";

export class CommentService{
    constructor() {}

    getAll() {
        return CommentRepository.getAll();
    }

    getById(id: string) {
        return CommentRepository.getById(id);
    }

    getByArticle(article: string){
        return CommentRepository.getByArticle(article);
    }

    create(comment: Partial<Comment>) {
        return CommentRepository.create(comment);
    }

    async update(comment: string, user: string, article: string, id: string) {
        const comment_get = await CommentRepository.getById(id);
        if(comment_get) {
            await CommentRepository.update(id, { comment,  user, article });
            return true;
        } else {
            return false;
        }
    }

    async remove(id: string) {
        const article = await CommentRepository.getById(id);
        if (article) {
            await CommentRepository.remove(id);
            return true;
        } else {
            return false;
        }
    }
}