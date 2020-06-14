import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
    openingHours:string;

    @Column()
    trending:boolean;
}
