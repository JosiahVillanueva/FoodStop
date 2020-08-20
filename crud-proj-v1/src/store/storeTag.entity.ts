import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { StoreEntity } from './store.entity';

@Entity('storetag')
export class StoreTagEntity {
    @PrimaryGeneratedColumn()
    storeTagId: number;

    @Column()
    tag:string;

    @ManyToOne(type => StoreEntity, storeEntity=>storeEntity.tags)
    storeEntity: StoreEntity
}
