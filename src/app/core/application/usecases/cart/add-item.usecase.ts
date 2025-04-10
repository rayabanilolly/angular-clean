import { inject, Injectable } from "@angular/core";
import { Product } from "../../../domain/interfaces/product.inteface";
import { CART_REPOSITORY_TOKEN } from "../../outputs/cart-api.output";

@Injectable()
export class CartAddItemUseCase {
    private readonly cart = inject(CART_REPOSITORY_TOKEN);

    execute(product: Product, quantity?: number): Promise<void> {
        return this.cart.save(product, quantity);
    }
}