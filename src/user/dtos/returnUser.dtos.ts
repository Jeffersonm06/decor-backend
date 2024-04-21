import { UserEntity } from "../interfaces/user.entity";

export class ReturnUserDto {
    name: string;
    email: string;
    cpf: string;
    phone: string;

    constructor(userEntity: UserEntity) {
        this.name = userEntity.name;
        this.email = userEntity.email;
        this.cpf = userEntity.cpf;
        this.phone = userEntity.phone;
    }
}