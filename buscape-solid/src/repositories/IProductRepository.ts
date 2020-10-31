import { Product } from "../entity/Product";

export interface IProductRepository {
  listAll(): Product[];
  save(product: Product): Promise<Product>;
}
