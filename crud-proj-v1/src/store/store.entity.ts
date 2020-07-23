import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { StoreOpenningHoursEntity } from './storeOpenningHours.entity';

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
    location:string;

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
}
