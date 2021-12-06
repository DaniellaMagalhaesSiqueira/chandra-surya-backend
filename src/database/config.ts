
// export const connection = createConnection({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "root",
//     database: "chandra_surya",
//     logging: true,
//     entities: [
//         UserEntity, 
//         ArticleEntity,
//         CommentEntity,
//         ConsultationEntity,
//     ]
// });

import { createConnection } from "typeorm";
import { ArticleEntity } from "../entities/article.entity";
import { CommentEntity } from "../entities/comment.entity";
import { ConsultationEntity } from "../entities/consultation.entity";
import { UserEntity } from "../entities/user.entity";


export const connection = createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    //host: "localhost",
    //port: 5432,
    //username: "postgres",
    //password: "root",
    //database: "chandra_surya",
    logging: true,
    entities: [
        UserEntity, 
        ArticleEntity,
        CommentEntity,
        ConsultationEntity,
    ],
    cli: {
        migrationsDir: 'src/migrations',
      }
});

