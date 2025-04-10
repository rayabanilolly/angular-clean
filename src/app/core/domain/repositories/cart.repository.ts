import { CartItem } from "../interfaces/cart.inteface";
import { Product } from "../interfaces/product.inteface";

export class CartRepository {
    constructor(public items: CartItem[] = []) {}

    addItem(product: Product, quantity: number = 1): void {
        const existingItem = this.items.find(item => item.product.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    getTotal(): number {
        return this.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    }
}