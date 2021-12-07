import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterTablegenerateUuidComments1638885677202 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('comments_article', 'id', new TableColumn(
            {name: "id", type: "uuid",  isPrimary: true, generationStrategy: "uuid", default: 'uuid_generate_v4()'},
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('comments_article', 'id', new TableColumn(
            {name: "id", type: "uuid",  isPrimary: true, generationStrategy: "uuid"},
        ));
    }

}
