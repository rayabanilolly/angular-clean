import { ProductItem } from "./product.entitiy";

export class CartItem {
    constructor(
        public product: ProductItem,
        public qty: number
    ) {}

    total(): number {
        return this.product.price * this.qty;
    }
}

export class Cart {
    constructor(
        public items: CartItem[] = [],
    ) {}

    count(): number {
        return this.items.reduce((acc, item) => acc + item.qty, 0);
    }

    total(): number {
        return this.items.reduce((acc, item) => acc + item.total(), 0);
    }
}