import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    username: string;
  
    @BeforeInsert()
    hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }

    @Column()
    password: string;

}
