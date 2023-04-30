import { Injectable } from '@nestjs/common';
import { User } from '../domain/User';

@Injectable()
export class UserInMemoryRepository {
  private readonly users: User[];
  constructor() {
    this.users = [];
  }

  persist(user: User): void {
    this.users.push(user);
  }
}
