import { AddressEntity } from "src/address/entity/address.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;

    @Column({name: 'email', nullable: false})
    email: string;

    @Column({name: 'password', nullable:false})
    password: string;

    @Column({name:'cpf', nullable:false})
    cpf: string;

    @Column({name:'phone', nullable: true})
    phone: string;

    @Column({name:'type_user'})
    typeUser:number;

    @Column({name: 'created_at'})
    createdAt:Date;

    @Column({name: 'updated_at'})
    updatedAt:Date;

    @OneToMany(() => AddressEntity, (address) => address.user)
    addresses?: AddressEntity[]
}