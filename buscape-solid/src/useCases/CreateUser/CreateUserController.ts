import { Request, Response } from "express";
import { CreateUserCase } from "./CreateUserCase";
export class CreateUserController {
  constructor(private createUserCase: CreateUserCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { name, password, email } = req.body;

    try {
      await this.createUserCase.execute({
        name,
        password,
        email,
      });
      return res.status(201).json({ details: "Usuário Criado com sucesso!" });
    } catch (err) {
      console.log(err);

      return res.status(400).json({
        details: err.message,
      });
    }
  };
}
