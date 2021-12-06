import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ({ name: 'articles'})
export class ArticleEntity{
    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'title', type: 'varchar', length: 255})
    title?: string;
    
    @Column({ name: 'author', type: 'varchar', length: 100})
    author?: string;
    
    @Column({ name: 'preview', type: 'varchar', length: 255})
    preview?: string;
    
    
    @Column({ name: 'text', type: 'text'})
    text?: string;
    
    @Column({ name: 'theme', type: 'varchar', length: 100 })
    theme?: string;
    
    
    @Column({ name: 'imageurl', type: 'varchar', length: 255})
    imageUrl?: string;

}