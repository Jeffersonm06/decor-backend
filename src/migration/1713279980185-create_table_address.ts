import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAddress1713279980185 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        CREATE TABLE address (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            complement VARCHAR(255),
            number INT NOT NULL,
            cep VARCHAR(10) NOT NULL,
            city_id INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES user(id),
            FOREIGN KEY (city_id) REFERENCES city(id)
        );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        drop table address
        `)
    }

}
