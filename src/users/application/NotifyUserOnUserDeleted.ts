import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserDeletedDomainEvent } from '../domain/UserDeletedDomainEvent';

@EventsHandler(UserDeletedDomainEvent)
export class NotifyUserOnUserDeleted
  implements IEventHandler<UserDeletedDomainEvent>
{
  async handle(event: UserDeletedDomainEvent): Promise<void> {
    console.log('User deleted: ', event);
  }
}
