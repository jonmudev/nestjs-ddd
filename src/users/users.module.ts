import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserCommandHandler } from './application/CreateUserCommandHandler';
import { UserCreator } from './application/UserCreator';
import { UserInMemoryRepository } from './infracstructure/UserInMemoryRepository';

import { UsersController } from './users.controller';

@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [UserCreator, UserInMemoryRepository, CreateUserCommandHandler],
})
export class UsersModule {}
