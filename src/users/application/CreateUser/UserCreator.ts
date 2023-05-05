import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { v4 } from 'uuid';

import { User } from '../../domain/User';
import { UserInMemoryRepository } from '../../infracstructure/UserInMemoryRepository';

interface Params {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
}

@Injectable()
export class UserCreator {
  constructor(
    private userRepository: UserInMemoryRepository,
    private eventPublisher: EventPublisher,
  ) {}

  async run({ id, name, email, password, age }: Params): Promise<void> {
    const user = User.create(id, name, email, password, age);
    this.userRepository.persist(user);
    this.eventPublisher.mergeObjectContext(user);
    user.commit();
  }
}
