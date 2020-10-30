import { Request, Response } from "express";

class AuthController {
  login(req: Request, res: Response) {
    return res.json({ msg: "Realizar o login" });
  }
  logout(req: Request, res: Response) {
    return res.json({ msg: "Realizar o logout" });
  }
  reset(req: Request, res: Response) {
    return res.json({ msg: "Resetar a senha" });
  }
}

export default new AuthController();
