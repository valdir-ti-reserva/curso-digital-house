import { User } from "../entity/User";

export interface IUserRepository {
  findAll(): Promise<User[]>;
  save(user: User): Promise<User>;
  edit(id: number, user: User): Promise<User>;
  delete(id: number): void;
}
