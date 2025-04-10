import { Product } from "../../domain/interfaces/product.inteface";

export interface ProductRepository {
    getProducts(): Promise<Product[]>;
}