import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, Redirect, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity'

@Controller('books')
export class UserController{
  constructor(private readonly userService: UsersService) {}

  @Post('post/user')
  async addBook(@Body() uDto: UserEntity): Promise<UserEntity> {
    return await this.userService.addUser(uDto);
  }
}
