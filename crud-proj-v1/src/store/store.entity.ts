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
    rating:string;

    @Column() 
    tag:string;

    @Column() 
    contractInformation:string

    @Column() 
    bestSeller:string;

    @Column() 
    openingHours:string;

}
