import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tag')
export class TagEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    picture:string;

    @Column()
    tagName:string;

    @Column() 
    tagDescription:string;

    @Column() 
    tagHexColor:string;

    @Column()
    show: number;
}
