import { Command } from 'src/shared/domain/Command';

export class DeleteUserCommand extends Command {
  constructor(public readonly id: string) {
    super();
  }
}
