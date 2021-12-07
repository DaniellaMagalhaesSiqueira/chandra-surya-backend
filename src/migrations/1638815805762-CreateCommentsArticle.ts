import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCommentsArticle1638815805762 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "comments_article",
                columns: [
                    {name: "id", type: "uuid",  isPrimary: true, generationStrategy: "uuid", default: 'uuid_generate_v4()'},
                    {name: "user_id", type: "uuid"},
                    {name: "article_id", type: "uuid"},
                    {name: "comment", type: "text"},
                ]
            }),true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comments_article', true);
    }

}
