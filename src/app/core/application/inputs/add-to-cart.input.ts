import { Product } from "../../domain/interfaces/product.inteface";

export interface AddToCartInput {
    execute: (product: Product, quantity?: number) => void;
}