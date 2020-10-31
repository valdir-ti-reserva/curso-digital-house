import { User } from "../../entity/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: CreateUserDTO) {
    const user = new User(data);
    await this.userRepository.save(user);
  }
}
