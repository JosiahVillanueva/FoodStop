import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ApiProperty } from '@nestjs/swagger';

export class BookDto {
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
    // async login(@Request() req) {
    async login(@Body() bDto: BookDto) {
        return this.authService.login(bDto.username);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
