import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableUser1638835860681 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME "brithdate" to "birthdate"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME "birthdate" to "brithdate"`);
    }

}
