import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CreateUserCommandHandler } from './application/CreateUser/CreateUserCommandHandler';
import { NotifyUserOnUserCreated } from './application/NotifyUserOnUserCreated';
import { UserCreator } from './application/CreateUser/UserCreator';
import { UserInMemoryRepository } from './infracstructure/UserInMemoryRepository';
import { UsersController } from './users.controller';
import { SearchAllQueryHandler } from './application/SearchAll/SearchAllQueryHandler';
import { SearchByIdQueryHandler } from './application/SearchById/SearchByIdQueryHandler';

@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [
    UserCreator,
    UserInMemoryRepository,
    CreateUserCommandHandler,
    SearchAllQueryHandler,
    SearchByIdQueryHandler,
    NotifyUserOnUserCreated,
  ],
})
export class UsersModule {}
