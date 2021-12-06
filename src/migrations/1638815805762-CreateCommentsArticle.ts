import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCommentsArticle1638815805762 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "comments_article",
                columns: [
                    {name: "id", type: "serial",  isPrimary: true, generationStrategy: "uuid", default: "serial_generated_v4()"},
                    {name: "user_id", type: "int"},
                    {name: "article_id", type: "int"},
                    {name: "comment", type: "text"},
                ]
            }),true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comments_article', true);
    }

}
