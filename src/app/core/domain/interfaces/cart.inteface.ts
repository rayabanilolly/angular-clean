import { Product } from "./product.inteface";

export interface CartItem {
    product: Product;
    quantity: number;
}