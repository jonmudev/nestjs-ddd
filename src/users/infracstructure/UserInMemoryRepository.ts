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

  findById(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new BadRequestException(`User with id ${id} not found`);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }
}
