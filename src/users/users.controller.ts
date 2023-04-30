import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateUserDto } from './dto/CreateUserDto';
import { CreateUserCommand } from './application/CreateUserCommand';

@Controller('users')
export class UsersController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  // Commands don´t retrieve anything => Promise<void>
  async createUser(@Body() createRequest: CreateUserDto): Promise<void> {
    this.commandBus.execute<CreateUserCommand, void>(
      new CreateUserCommand(
        createRequest.name,
        createRequest.email,
        createRequest.password,
        createRequest.age,
      ),
    );
  }
}
