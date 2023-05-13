import { User } from './User';

export interface UserRepository {
  persist: (newUser: User | User[]) => void;
  delete: (id: string) => void;
  findById: (id: string) => User | null;
  findAll: () => User[];
}
