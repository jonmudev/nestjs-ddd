import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

import { User } from '../domain/User';

@Injectable()
export class UserInMemoryRepository {
  private readonly users: User[];
  constructor() {
    this.users = [];
  }

  persist(newUser: User): void {
    const user = this.users.find((user) => user.email === newUser.email);
    if (user)
      throw new BadRequestException(`${newUser.email} is already in use`);
    this.users.push(newUser);
  }
}
