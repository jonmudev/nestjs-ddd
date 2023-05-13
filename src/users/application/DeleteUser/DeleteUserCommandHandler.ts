import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';

import { DeleteUserCommand } from './DeleteUserCommand';
import { UserDeleter } from './UserDeleter';

@CommandHandler(DeleteUserCommand)
export class DeleteUserCommandHandler
  implements ICommandHandler<DeleteUserCommand>
{
  constructor(private userDeleter: UserDeleter) {}
  async execute(command: DeleteUserCommand): Promise<void> {
    const { id } = command;
    await this.userDeleter.run({ id });
  }
}
