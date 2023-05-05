import { Command } from 'src/shared/domain/Command';

export class CreateUserCommand extends Command {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly age: number,
  ) {
    super();
  }
}
