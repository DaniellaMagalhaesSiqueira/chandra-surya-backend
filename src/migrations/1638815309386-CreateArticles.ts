import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateArticles1638815309386 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "articles",
                columns: [
                    {name: "id", type: "uuid",  isPrimary: true, generationStrategy: "uuid", default: 'uuid_generate_v4()'},
                    {name: "title", type: "varchar", length: "255"},
                    {name: "author", type: "varchar", length: "100"},
                    {name: "preview", type: "varchar", length: "255"},
                    {name: "text", type: "text"}, 
                    {name: "theme", type: "varchar", length: "100"},
                    {name: "imageurl", type: "varchar", length: "255"},
                ]
                }), true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('articles', true);
    }

}
