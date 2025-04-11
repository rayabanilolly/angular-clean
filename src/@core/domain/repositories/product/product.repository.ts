import { Product } from "../../entities/product.entities";

export class ProductRepository {
    available(product: Product): boolean {
        return product.stock > 0;
    }
}