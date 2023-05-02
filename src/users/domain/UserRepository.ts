import { User } from './User';

export interface UserRepository {
  persist: (newUser: User | User[]) => void;
  findById: (id: string) => User | null;
  findAll: () => User[];
}
