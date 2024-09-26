import { MigrationInterface, QueryRunner } from "typeorm";

export class ProjectNumsToString1721241531742 implements MigrationInterface {
    name = 'ProjectNumsToString1721241531742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "projects" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "token_name" character varying NOT NULL, "token_symbol" character varying NOT NULL, "token_description" character varying NOT NULL, "total_supply" character varying, "target_soft_cap" character varying NOT NULL, "limit_per_user" character varying NOT NULL, "liquidity_percentage" character varying, "fair_launch_allocation" character varying NOT NULL, "dex_listing" character varying NOT NULL, "marketing_team_allocation" character varying NOT NULL, "team_and_member_allocation" character varying NOT NULL, "is_approved" boolean NOT NULL DEFAULT false, "is_deleted" boolean NOT NULL DEFAULT false, "presale_contract_address" character varying, "token_contract_address" character varying, "start_time" TIMESTAMP, "end_time" TIMESTAMP, "status" "public"."projects_status_enum" NOT NULL DEFAULT 'waiting_to_start', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fc9f1e64d4626f18beff534a9f3" PRIMARY KEY ("uuid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "projects"`);
    }

}
