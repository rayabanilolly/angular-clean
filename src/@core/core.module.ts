import { HttpClient } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { OrderAPIService } from "./adapter/api/order.api";
import { UI_NOTIFICATION_TOKEN } from "./adapter/tokens/ui/notification.token";
import { CHECKOUT_TOKEN } from "./adapter/tokens/usecases/order/checkout.token";
import { BrowserAlertNotification } from "./adapter/ui/notif/browser-alert";
import { CheckoutUseCase } from "./application/usecases/product/checkout.usecase";
import { ProductRepository } from "./domain/repositories/product/product.repository";

@NgModule({})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                {
                    provide: UI_NOTIFICATION_TOKEN,
                    useClass: BrowserAlertNotification
                },
                {
                    provide: CHECKOUT_TOKEN,
                    useFactory: (http: HttpClient) => {
                        const productRepository = new ProductRepository();
                        const checkoutService = new OrderAPIService(http); // manual instantiation

                        return new CheckoutUseCase(productRepository, checkoutService);
                    },
                    deps: [HttpClient]
                },
                {
                    provide: ProductRepository,
                    useClass: ProductRepository
                }
            ]
        };
    }
}