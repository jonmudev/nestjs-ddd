import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { UserDto } from 'src/users/dto/UserDto';
import { UserInMemoryRepository } from 'src/users/infracstructure/UserInMemoryRepository';
import { SearchAllQuery } from './SearchAllQuery';

@QueryHandler(SearchAllQuery)
export class SearchAllQueryHandler implements IQueryHandler<SearchAllQuery> {
  constructor(private readonly userRepositoy: UserInMemoryRepository) {}

  async execute(query: SearchAllQuery): Promise<UserDto[]> {
    return [...this.userRepositoy.findAll()];
  }
}
