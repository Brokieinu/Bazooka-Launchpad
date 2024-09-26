import { MigrationInterface, QueryRunner } from "typeorm";

export class TotalCapRaised1721281163610 implements MigrationInterface {
    name = 'TotalCapRaised1721281163610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ADD "total_cap_raised" character varying`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "total_supply" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "liquidity_percentage" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "liquidity_percentage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "total_supply" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "total_cap_raised"`);
    }

}
