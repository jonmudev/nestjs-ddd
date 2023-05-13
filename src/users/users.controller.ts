import { Body, Controller, Get, Param, Put, Delete } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateUserDto } from './dto/CreateUserDto';
import { CreateUserCommand } from './application/CreateUser/CreateUserCommand';
import { UserDto } from './dto/UserDto';
import { SearchAllQuery } from './application/SearchAll/SearchAllQuery';
import { SearchByIdQuery } from './application/SearchById/SearchByIdQuery';
import { DeleteUserCommand } from './application/DeleteUser/DeleteUserCommand';

@Controller('users')
export class UsersController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Put(':id')
  // Commands don´t retrieve anything => Promise<void>
  async createUser(
    @Param('id') userId: string,
    @Body() createRequest: CreateUserDto,
  ): Promise<void> {
    await this.commandBus.execute<CreateUserCommand, void>(
      new CreateUserCommand(
        userId,
        createRequest.name,
        createRequest.email,
        createRequest.password,
        createRequest.age,
      ),
    );
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string): Promise<void> {
    await this.commandBus.execute<DeleteUserCommand, void>(
      new DeleteUserCommand(userId),
    );
  }

  @Get(':id')
  // Queries retrieve something => Promise<UserDto>
  async getUser(@Param('id') userId: string): Promise<UserDto> {
    const user = await this.queryBus.execute<SearchByIdQuery, UserDto>(
      new SearchByIdQuery(userId),
    );
    return user;
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
