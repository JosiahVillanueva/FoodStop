import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('storetag')
export class StoreTagEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    storeId:string;

    @Column()
    tag:string;
}
