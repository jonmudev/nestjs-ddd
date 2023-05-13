import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';

import { UserDeletedDomainEvent } from 'src/users/domain/UserDeletedDomainEvent';
import { UserInMemoryRepository } from '../../infracstructure/UserInMemoryRepository';

interface Params {
  id: string;
}

@Injectable()
export class UserDeleter {
  constructor(
    private userRepository: UserInMemoryRepository,
    private eventBus: EventBus,
  ) {}

  async run({ id }: Params): Promise<void> {
    this.userRepository.delete(id);
    this.eventBus.publish(new UserDeletedDomainEvent(id));
  }
}
