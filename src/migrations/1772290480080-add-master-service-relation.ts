import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMasterServiceRelation1772290480080
  implements MigrationInterface
{
  name = 'AddMasterServiceRelation1772290480080';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "masters_services" ("master_id" integer NOT NULL, "service_id" integer NOT NULL, CONSTRAINT "PK_201bd35b9b693ac086f7b842d16" PRIMARY KEY ("master_id", "service_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2e6cd5ed6f8979b17addf0fc5d" ON "masters_services" ("master_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2116e10da353d06e9f4a72e77b" ON "masters_services" ("service_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "masters_services" ADD CONSTRAINT "masters_services_master_id_fkey" FOREIGN KEY ("master_id") REFERENCES "masters"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "masters_services" ADD CONSTRAINT "masters_services_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "masters_services" DROP CONSTRAINT "masters_services_service_id_fkey"`,
    );
    await queryRunner.query(
      `ALTER TABLE "masters_services" DROP CONSTRAINT "masters_services_master_id_fkey"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_2116e10da353d06e9f4a72e77b"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_2e6cd5ed6f8979b17addf0fc5d"`,
    );
    await queryRunner.query(`DROP TABLE "masters_services"`);
  }
}
