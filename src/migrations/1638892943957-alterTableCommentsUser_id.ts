import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterTableCommentsUserId1638892943957 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('comments_article', 'user_id', new TableColumn(
            {name: "user_id", type: "uuid"},
        ));
        await queryRunner.changeColumn('comments_article', 'article_id', new TableColumn(
            {name: "user_id", type: "uuid"},
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('comments_article', 'user_id', new TableColumn(
            {name: "user_id", type: "int"},
        ));
        await queryRunner.changeColumn('comments_article', 'article_id', new TableColumn(
            {name: "user_id", type: "int"},
        ));
    }


}
