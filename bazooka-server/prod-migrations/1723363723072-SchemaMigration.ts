import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaMigration1723363723072 implements MigrationInterface {
    name = 'SchemaMigration1723363723072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "wallet_address" character varying, "meta" json, "profile_pic" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."projects_status_enum" AS ENUM('waiting_to_start', 'presale_ongoing', 'presale_ended', 'claim_available')`);
        await queryRunner.query(`CREATE TYPE "public"."projects_sale_type_enum" AS ENUM('public', 'private')`);
        await queryRunner.query(`CREATE TABLE "projects" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "token_name" character varying, "token_symbol" character varying, "token_image" character varying, "token_decimal" integer, "token_banner_image" character varying, "token_description" character varying, "total_supply" character varying, "target_soft_cap" character varying, "limit_per_user" character varying, "liquidity_percentage" character varying, "fair_launch_allocation" character varying, "dex_listing" character varying, "marketing_team_allocation" character varying, "team_member_allocation" character varying, "is_approved" boolean NOT NULL DEFAULT false, "is_deleted" boolean NOT NULL DEFAULT false, "presale_contract_address" character varying, "token_contract_address" character varying, "total_cap_raised" character varying, "project_website_url" character varying, "project_telegram_url" character varying, "project_twitter_url" character varying, "start_time" TIMESTAMP, "end_time" TIMESTAMP, "status" "public"."projects_status_enum" NOT NULL DEFAULT 'waiting_to_start', "sale_type" "public"."projects_sale_type_enum" NOT NULL DEFAULT 'public', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fc9f1e64d4626f18beff534a9f3" PRIMARY KEY ("uuid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TYPE "public"."projects_sale_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."projects_status_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
