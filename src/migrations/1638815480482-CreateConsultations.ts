import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateConsultations1638815480482 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "consultations",
                columns: [
                    {name: "id", type: "serial",  isPrimary: true, generationStrategy: "uuid", default: "serial_generated_v4()"},
                    {name: "professional", type: "varchar", length: "100"},
                    {name: "imageurl", type: "varchar", length: "255"},
                    {name: "description", type: "varchar", length: "255"},
                    {name: "theme", type: "varchar", length: "100"},
                    {name: "contact", type: "varchar", length: "255"},
                    {name: "price", type: "float4"},
                ]
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('consultations');
    }


}
