import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

    async findOne(username: string): Promise<UserEntity> {
        return await this.userRepository.findOne({
          where: [{ "username": username }]
        });
    }

    /*
    {
    "id":0,
    "username":"asd",
    "password":"asd"
    }
    */
}
