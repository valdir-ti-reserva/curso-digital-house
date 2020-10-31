import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { EditUserCase } from "./EditUserCase";

export class EditUserController {
  constructor(private editUserCase: EditUserCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { name, password, email } = req.body;
    const { id } = req.params;

    const newPassword = bcrypt.hashSync(password, 10);

    try {
      await this.editUserCase.execute(id, {
        name,
        password: newPassword,
        email,
      });
      return res.status(201).json({ details: "Usuário alterado com sucesso!" });
    } catch (err) {
      console.log(err);

      return res.status(400).json({
        details: err.message,
      });
    }
  };
}
