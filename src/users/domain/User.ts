import { AggregateRoot } from '@nestjs/cqrs';

import { UserCreatedDomainEvent } from './UserCreatedDomainEvent';

export class User extends AggregateRoot {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly age: number,
  ) {
    //We should implement any encrypting password logic here
    super();
  }

  static create(
    id: string,
    name: string,
    email: string,
    password: string,
    age: number,
  ): User {
    const user = new User(id, name, email, password, age);

    user.apply(new UserCreatedDomainEvent(id, name, email, password, age));

    return user;
  }
}
