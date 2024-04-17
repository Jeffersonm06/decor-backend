import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInState1713315041551 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Acre', 'AC'); `);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Alagoas', 'AL');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Amazonas', 'AM');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Amapá', 'AP');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Bahia', 'BA');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Ceará', 'CE');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Distrito Federal', 'DF');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Espírito Santo', 'ES');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Goiás', 'GO');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Maranhão', 'MA');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Minas Gerais', 'MG');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Mato Grosso do Sul', 'MS');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Mato Grosso', 'MT');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Pará', 'PA');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Paraíba', 'PB');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Pernambuco', 'PE');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Piauí', 'PI');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Paraná', 'PR');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Rio de Janeiro', 'RJ');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Rio Grande do Norte', 'RN');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Rondônia', 'RO');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Roraima', 'RR');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Rio Grande do Sul', 'RS');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Santa Catarina', 'SC');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Sergipe', 'SE');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'São Paulo', 'SP');`);
        queryRunner.query(`INSERT INTO state (id, name, uf) VALUES (null, 'Tocantins', 'TO');`);
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM state;
        `);
    }

}
