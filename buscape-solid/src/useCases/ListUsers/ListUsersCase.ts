import { User } from "../../entity/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ListUsersDTO } from "./ListUsersDTO";

export class ListUsersCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute() {
    await this.usersRepository.findAll();
  }
}
