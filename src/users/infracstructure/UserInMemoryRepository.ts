import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

@Injectable()
export class UserInMemoryRepository implements UserRepository {
  private readonly users: User[];
  constructor() {
    this.users = [];
  }

  persist(newUser: User): void {
    const user = this.users.find(
      (user) => user.email === newUser.email || user.id === newUser.id,
    );
    if (user)
      throw new BadRequestException(
        `email:${newUser.email} or id:${newUser.id} is already in use`,
      );
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

  delete(id: string): void {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new BadRequestException(`User with id ${id} not found`);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
}
