import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ArticleEntity } from "./article.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: 'comments_article'})
export class CommentEntity{
    @PrimaryGeneratedColumn({name: 'id'})
    id?: string;

    @OneToOne(() => UserEntity)
    @JoinColumn({name: 'user_id'})
    user?: string;

    
    @Column({ name: 'comment', type: 'text'})
    comment?: string;


    @OneToOne(() => ArticleEntity)
    @JoinColumn({name: 'article_id'})
    article?: string;
}