import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from './users/user.entity'

export class BookDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    username: string;
  
    @ApiProperty({required: true})
    password: string;
  }

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Body() bDto: UserEntity) {
        return this.authService.login(bDto.username);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
