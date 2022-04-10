import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1649266476168 implements MigrationInterface {
  name = "CreateTable1649266476168";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "indicator_data" ("id" SERIAL NOT NULL, "data" DATE NOT NULL, "hora" integer NOT NULL, "dia" integer NOT NULL, "mes" integer NOT NULL, "uf" character varying NOT NULL, "estado" character varying NULL, "alo" integer NULL, "cpc" integer NULL, "cpca" integer NULL, "pp" integer NULL, "cliente_nao_esta" integer NULL, "cliente_nao_validou" integer NULL, "desconhece" integer NULL, "desconhece_divida" integer NULL, "falecido" integer NULL, "fone_mudo" integer NULL, "lig_perdida" integer NULL, "preventivo" integer NULL, "recado" integer NULL, "alega" integer NULL, "retorno_agendado" integer NULL, "dados_invalidos" integer NULL, "sem_interesse" integer NULL, "nao_tabulada" integer NULL, "retorno_indireto" integer NULL, "fraude" integer NULL, "ocupado" integer NULL, "recept" integer NULL, "processo_juridico" integer NULL, "contestacao" integer NULL, "valor" character varying NOT NULL, "tipo" character varying NOT NULL, "produto" character varying NOT NULL, CONSTRAINT "PK_f4b31062be24526cbfeb9bca09c" PRIMARY KEY ("id"))`
    );

    await queryRunner.query(
      `\COPY indicator_data FROM '/app/data/BASE.csv' delimiter ';' csv header;`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "indicator_data"`);
  }
}
