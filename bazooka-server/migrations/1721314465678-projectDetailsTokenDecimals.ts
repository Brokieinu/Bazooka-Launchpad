import { MigrationInterface, QueryRunner } from "typeorm";

export class ProjectDetailsTokenDecimals1721314465678 implements MigrationInterface {
    name = 'ProjectDetailsTokenDecimals1721314465678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ADD "token_decimal" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "token_decimal"`);
    }

}
