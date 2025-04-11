import { inject, Injectable } from "@angular/core";
import { Product } from "../../../domain/entities/product.entities";
import { ProductRepository } from "../../../domain/repositories/product/product.repository";
import { Observable } from "rxjs";
import { OrderAPIService } from "../../../adapter/api/order.api";
import { UI_NOTIFICATION_TOKEN } from "../../../adapter/tokens/ui/notification.token";
import { TCheckoutReponse } from "../../inputs/order.input";

@Injectable({
    providedIn: 'root'
})
export class CheckoutUseCase {
    private readonly notification = inject(UI_NOTIFICATION_TOKEN)

    constructor(
        private readonly productRepository: ProductRepository,
        private readonly orderService: OrderAPIService
    ) {}

    execute(product: Product): void {
        if (!this.productRepository.available(product)) {
            this.notification.showError('Product not available');
        }

        this.orderService.checkout(product)
            .subscribe({
                next: (response: TCheckoutReponse) => this.notification.showSuccess(response.message)
            })
    }
}