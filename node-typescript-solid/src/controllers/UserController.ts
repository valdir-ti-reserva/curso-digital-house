import { Request, Response } from "express";

class UserController {
  store(req: Request, res: Response) {
    return res.json({ msg: "Store User" });
  }
  update(req: Request, res: Response) {
    return res.json({ msg: "Update User" });
  }
}

export default new UserController();
