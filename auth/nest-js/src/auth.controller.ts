import { Controller, Get, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello() {
    return this.authService.getHello();
  }

  @Post()
  login() {
    return this.authService.login();
  }

  @Put()
  resetPassword() {
    return this.authService.resetPassword();
  }
}
