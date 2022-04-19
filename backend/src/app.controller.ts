import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUser } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() createUserRequest: CreateUser) {
    this.appService.createUser(createUserRequest);
  }

  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}