import { User } from "../../entity/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { EditUserDTO } from "./EditUserDTO";

export class EditUserCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute(id, data: EditUserDTO) {
    const user = new User(data);
    await this.userRepository.edit(id, user);
  }
}
