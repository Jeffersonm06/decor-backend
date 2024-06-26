import { AddressEntity } from "src/address/entity/address.entity";
import { StateEntity } from "src/state/entity/state.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'city' })
export class CityEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'state_id', nullable: false })
    stateId: number;

    @Column({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'updated_at' })
    updatedAt: Date;

    @OneToMany(() => AddressEntity, (address) => address.city)
    addresses?: AddressEntity[]

    @ManyToOne(() => StateEntity, (state) => state.cities)
    @JoinColumn({name: 'state_id', referencedColumnName: 'id'})
    state?: StateEntity
}