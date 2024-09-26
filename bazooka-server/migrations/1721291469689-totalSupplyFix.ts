import { MigrationInterface, QueryRunner } from "typeorm";

export class TotalSupplyFix1721291469689 implements MigrationInterface {
    name = 'TotalSupplyFix1721291469689'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ADD "project_website_url" character varying`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "project_telegram_url" character varying`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "project_twitter_url" character varying`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "token_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "token_symbol" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "token_description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "total_supply" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "target_soft_cap" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "limit_per_user" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "liquidity_percentage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "fair_launch_allocation" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "dex_listing" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "marketing_team_allocation" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "team_and_member_allocation" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "team_and_member_allocation" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "marketing_team_allocation" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "dex_listing" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "fair_launch_allocation" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "liquidity_percentage" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "limit_per_user" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "target_soft_cap" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "total_supply" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "token_description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "token_symbol" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "token_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "project_twitter_url"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "project_telegram_url"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "project_website_url"`);
    }

}
