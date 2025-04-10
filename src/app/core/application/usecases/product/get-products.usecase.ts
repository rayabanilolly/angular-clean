import { Injectable } from "@angular/core";
import { ProductRepository } from "../../repositories/product.repository";

@Injectable({
    providedIn: 'root',
})
export class GetProductsUseCase {
    constructor(private productRepo: ProductRepository) {}

    async execute(): Promise<any[]> {
        return this.productRepo.getProducts();
    }
}