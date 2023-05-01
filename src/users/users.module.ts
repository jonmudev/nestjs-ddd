import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CreateUserCommandHandler } from './application/CreateUser/CreateUserCommandHandler';
import { NotifyUserOnUserCreated } from './application/NotifyUserOnUserCreated';
import { UserCreator } from './application/CreateUser/UserCreator';
import { UserInMemoryRepository } from './infracstructure/UserInMemoryRepository';
import { UsersController } from './users.controller';
import { SearchAllQueryHandler } from './application/SearchAll/SearchAllQueryHandler';

@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [
    UserCreator,
    UserInMemoryRepository,
    CreateUserCommandHandler,
    SearchAllQueryHandler,
    NotifyUserOnUserCreated,
  ],
})
export class UsersModule {}
