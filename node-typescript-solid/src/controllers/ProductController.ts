import { Request, Response } from "express";

class ProductController {
  index(req: Request, res: Response) {
    return res.json({ msg: "Busca os produtos" });
  }
  listProductByIdUser(req: Request, res: Response) {
    return res.json({ msg: "Desfavoritar produto" });
  }
  delete(req: Request, res: Response) {
    return res.json({ msg: "Desfavoritar produto" });
  }
  store(req: Request, res: Response) {
    return res.json({ msg: "Add favorito" });
  }
}

export default new ProductController();
