import { MigrationInterface, QueryRunner } from "typeorm";

export class ProjectImage1721308642999 implements MigrationInterface {
    name = 'ProjectImage1721308642999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "team_and_member_allocation"`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "token_image" character varying`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "token_banner_image" character varying`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "team_member_allocation" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "team_member_allocation"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "token_banner_image"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "token_image"`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "team_and_member_allocation" character varying`);
    }

}
