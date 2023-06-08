import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { LocalGuard } from '../auth/guard/local.guard';
import { createDto, loginDto } from './dto/create.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @UseGuards(LocalGuard)
  @Post('register')
  register(@Body() body: createDto): Promise<string> {
    return this.service.createUser(body);
  }

  @Post('login')
  login(@Body() body: loginDto): Promise<string> {
    return this.service.login(body)
  }
}