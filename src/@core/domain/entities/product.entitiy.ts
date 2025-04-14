export class ProductItem {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public stock: number
    ) {}
    
    available(): boolean {
        return this.stock > 0;
    }
}

export class Product {
    constructor(public product: ProductItem) {}

    available(): boolean {
        return this.product.stock > 0;
    }
}