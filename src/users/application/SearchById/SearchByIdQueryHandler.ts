import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { UserDto } from 'src/users/dto/UserDto';
import { UserInMemoryRepository } from 'src/users/infracstructure/UserInMemoryRepository';
import { SearchByIdQuery } from './SearchByIdQuery';

@QueryHandler(SearchByIdQuery)
export class SearchByIdQueryHandler implements IQueryHandler<SearchByIdQuery> {
  constructor(private readonly userRepositoy: UserInMemoryRepository) {}

  async execute(query: SearchByIdQuery): Promise<UserDto> {
    const { id } = query;
    return { ...this.userRepositoy.findById(id) };
  }
}
