import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CreateUserCommandHandler } from './application/CreateUser/CreateUserCommandHandler';
import { NotifyUserOnUserCreated } from './application/NotifyUserOnUserCreated';
import { UserCreator } from './application/CreateUser/UserCreator';
import { UserInMemoryRepository } from './infracstructure/UserInMemoryRepository';
import { UsersController } from './users.controller';
import { SearchAllQueryHandler } from './application/SearchAll/SearchAllQueryHandler';
import { SearchByIdQueryHandler } from './application/SearchById/SearchByIdQueryHandler';
import { UserDeleter } from './application/DeleteUser/UserDeleter';
import { DeleteUserCommandHandler } from './application/DeleteUser/DeleteUserCommandHandler';
import { NotifyUserOnUserDeleted } from './application/NotifyUserOnUserDeleted';

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
    UserDeleter,
    DeleteUserCommandHandler,
    NotifyUserOnUserDeleted,
  ],
})
export class UsersModule {}
