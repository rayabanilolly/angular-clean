import { InjectionToken } from "@angular/core";
// import { CartRepository } from "../../domain/repositories/cart.repository";
import { Product } from "../../domain/interfaces/product.inteface";

export interface CartRepositoryOutput {
    save(product: Product, quantity?: number): Promise<void>;
    checkout(): Promise<void>;
}

export const CART_REPOSITORY_TOKEN = new InjectionToken<CartRepositoryOutput>('CART_REPOSITORY_TOKEN');