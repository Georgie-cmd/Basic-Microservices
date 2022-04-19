import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = []
  
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('hangleUserCreated - ANALYRICS', data)
    this.analytics.push({
      email: data.email,
      timestamps: new Date()
    })
  }

  getAnalytics() {
    return this.analytics
  }
}
