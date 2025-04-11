import { Injectable } from "@angular/core";
import { Product } from "../../../domain/entities/product.entities";
import { ProductRepository } from "../../../domain/repositories/product/product.repository";
import { CheckoutInput } from "../../inputs/product/checkout.input";
import { Observable, of } from "rxjs";
import { OrderAPIService } from "../../../adapter/api/order.api";

@Injectable({
    providedIn: 'root'
})
export class CheckoutUseCase implements CheckoutInput {
    constructor(
        private readonly productRepository: ProductRepository,
        private readonly orderService: OrderAPIService
    ) {}

    checkout(product: Product): Observable<string> {
        if (!this.productRepository.available(product)) {
            return of('Product not available');
        }

        return this.orderService.checkout(product);
    }
}