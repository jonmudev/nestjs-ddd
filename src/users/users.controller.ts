import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateUserDto } from './dto/CreateUserDto';
import { CreateUserCommand } from './application/CreateUser/CreateUserCommand';
import { UserDto } from './dto/UserDto';
import { SearchAllQuery } from './application/SearchAll/SearchAllQuery';

@Controller('users')
export class UsersController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  // Commands don´t retrieve anything => Promise<void>
  async createUser(@Body() createRequest: CreateUserDto): Promise<void> {
    await this.commandBus.execute<CreateUserCommand, void>(
      new CreateUserCommand(
        createRequest.name,
        createRequest.email,
        createRequest.password,
        createRequest.age,
      ),
    );
  }

  @Get()
  // Queries retrieve something => Promise<UserDto[]>
  async getUsers(): Promise<UserDto[]> {
    const users = await this.queryBus.execute<SearchAllQuery, UserDto[]>(
      new SearchAllQuery(),
    );
    return users;
  }
}
