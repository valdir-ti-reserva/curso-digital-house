import { Request, Response } from "express";
import { ListUsersCase } from "./ListUsersCase";

export class ListUserController {
  constructor(private listUserCase: ListUsersCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const users = await this.listUserCase.execute();
      console.log(users);
      return res.status(200).json(users);
    } catch (err) {
      console.log(err);

      return res.status(400).json({ details: err.message });
    }
  };
}
