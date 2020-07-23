import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { StoreEntity } from './store.entity';

@Entity('storeopenninghours')
export class StoreOpenningHoursEntity {
    @PrimaryGeneratedColumn()
    storeOpenningHoursId: number;

    @Column()
    day:number;

    @Column()
    open:string;

    @Column()
    close:string;

    @ManyToOne(type => StoreEntity, storeEntity => storeEntity.openingHours)
    storeEntity: StoreEntity;
}
