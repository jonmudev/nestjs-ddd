import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';

import { CreateUserCommand } from './CreateUserCommand';
import { UserCreator } from './UserCreator';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(private userCreator: UserCreator) {}
  async execute(command: CreateUserCommand): Promise<void> {
    const { id, name, email, password, age } = command;
    await this.userCreator.run({ id, name, email, password, age });
  }
}
