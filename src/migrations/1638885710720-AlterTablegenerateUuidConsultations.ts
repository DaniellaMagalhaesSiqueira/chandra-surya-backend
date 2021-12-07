import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterTablegenerateUuidConsultations1638885710720 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('consultations', 'id', new TableColumn(
            {name: "id", type: "uuid",  isPrimary: true, generationStrategy: "uuid", default: 'uuid_generate_v4()'},
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('consultations', 'id', new TableColumn(
            {name: "id", type: "uuid",  isPrimary: true, generationStrategy: "uuid"},
        ));
    }

}
