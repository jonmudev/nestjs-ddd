import { Injectable } from '@nestjs/common';
import { User } from '../domain/User';

@Injectable()
export class UserInMemoryRepository {
  constructor(private readonly users: User[] = []) {}

  persist(user: User): void {
    this.users.push(user);
  }
}
