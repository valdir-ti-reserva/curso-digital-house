"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserCase = void 0;
const User_1 = require("../../entity/User");
class CreateUserCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(data) {
        const user = new User_1.User(data);
        await this.usersRepository.save(user);
    }
}
exports.CreateUserCase = CreateUserCase;
//# sourceMappingURL=CreateUserCase.js.map