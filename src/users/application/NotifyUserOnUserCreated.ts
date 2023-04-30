import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreatedDomainEvent } from '../domain/UserCreatedDomainEvent';

@EventsHandler(UserCreatedDomainEvent)
export class NotifyUserOnUserCreated
  implements IEventHandler<UserCreatedDomainEvent>
{
  async handle(event: UserCreatedDomainEvent): Promise<void> {
    console.log('User created: ', event);
  }
}
