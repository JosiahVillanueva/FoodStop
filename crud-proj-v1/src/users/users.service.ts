import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    password: any;
    saltRounds: number = 10;

    // const bcrypt: required('bcrypt');

    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

    async findOne(username: string): Promise<UserEntity> {
        return await this.userRepository.findOne({
          where: [{ "username": username }]
        });
    }

    async addUser(userEntity: UserEntity) {
      await bcrypt.hash(userEntity.password, this.saltRounds).then(function(hash) {
        userEntity.password = hash;
      });
    
      return await this.userRepository.save(userEntity);
    }
}
