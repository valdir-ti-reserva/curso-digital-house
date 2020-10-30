import { MigrationInterface, QueryRunner } from "typeorm";

export class User1604021868539 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //await queryRunner.query("create table users");
    await queryRunner.createTable("users", {});
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
