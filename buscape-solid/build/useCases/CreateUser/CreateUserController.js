"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserCase) {
        this.createUserCase = createUserCase;
        this.handle = async (req, res) => {
            const { name, password, email } = req.body;
            try {
                await this.createUserCase.execute({
                    name,
                    password,
                    email,
                });
                return res.status(201).send();
            }
            catch (err) {
                console.log(err);
                return res.status(400).json({
                    details: err.message,
                });
            }
        };
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map