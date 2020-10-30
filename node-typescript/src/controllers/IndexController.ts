import { Request, Response } from "express";

class IndexController {
  index(req: Request, res: Response) {
    return res.json({ version: "1.0", msg: "API running!" });
  }
}

export default new IndexController();
