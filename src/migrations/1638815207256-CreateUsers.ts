import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1638815207256 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {name: "id", type: "serial",  isPrimary: true, generationStrategy: "uuid", default: "serial_generated_v4()"},
                    {name: "isadmin", type: "bool", },
                    {name: "name_user", type: "varchar", length: "100"},
                    {name: "email", type: "varchar", length: "255"},
                    {name: "cpf", type: "varchar", length: "14"},
                    {name: "password", type: "varchar", length: "255"},
                    {name: "brithdate", type: "date"},
                ]
            }), true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users', true);
    }


}
