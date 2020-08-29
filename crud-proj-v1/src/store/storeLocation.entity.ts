import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { StoreEntity } from './store.entity';

@Entity('storeLocation')
export class StoreLocationEntity {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    address:string;

    @Column()
    city:string;

    @Column()
    zipCode:string;
}