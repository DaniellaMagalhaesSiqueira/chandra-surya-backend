import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ArticleEntity } from "./article.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: 'comments_article'})
export class CommentEntity{
    @PrimaryGeneratedColumn({name: 'id'})
    id?: number;

    @OneToOne(() => UserEntity, user => user.id)
    @JoinColumn({name: 'user_id'})
    user?: number;

    
    @Column({ name: 'comment', type: 'text'})
    comment?: string;


    @OneToOne(() => ArticleEntity, article => article.id)
    @JoinColumn({name: 'article_id'})
    article?: number;
}