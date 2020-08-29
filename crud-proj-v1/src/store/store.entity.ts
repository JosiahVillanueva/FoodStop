import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { StoreOpenningHoursEntity } from './storeOpenningHours.entity';
import { StoreTagEntity } from './storeTag.entity';
import { StoreLocationEntity } from './storeLocation.entity';

@Entity('store')
export class StoreEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    pictures:string;

    @Column()
    title:string;

    @Column() 
    description:string;

    @Column() 
    price:string;

    @Column() 
    rating:string;

    @Column() 
    contactInformation:string

    @Column() 
    bestSeller:string;

    @Column()
    trending:number;

    @OneToMany(() => StoreOpenningHoursEntity, storeOpenningHoursEntity => storeOpenningHoursEntity.storeEntity)
    openingHours: StoreOpenningHoursEntity[];

    @OneToMany(() => StoreTagEntity, storeTagEntity => storeTagEntity.storeEntity)
    tags: StoreTagEntity[];

    @OneToOne(type => StoreLocationEntity)
    @JoinColumn()
    location: StoreLocationEntity;
}
