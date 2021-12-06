import {MigrationInterface, QueryRunner} from "typeorm";

export class ChandraDatabase1638817434747 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createDatabase("chandra-surya", true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropDatabase("chandra-surya", true);
    }

}
