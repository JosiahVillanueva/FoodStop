import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tag')
export class TagEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    picture:string;

    @Column()
    tag_name:string;

    @Column() 
    tag_description:string;

    @Column() 
    tag_hex_color:string;
}
