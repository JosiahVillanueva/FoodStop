import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BooksEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string;

    @Column() 
    description:Date;

    @Column() 
    author:Date;

}
