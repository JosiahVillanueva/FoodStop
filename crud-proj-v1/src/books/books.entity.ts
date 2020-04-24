import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class BooksEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string;

    @Column() 
    description:string;

    @Column() 
    author:string;
}
