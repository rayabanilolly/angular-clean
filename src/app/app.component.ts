import { Component, inject } from '@angular/core'
import { Product } from '../@core/domain/entities/product.entities';
import { ProductRepository } from '../@core/domain/repositories/product/product.repository';
import { CommonModule } from '@angular/common';
import { GetProductUseCase } from '../@core/application/usecases/product/get.usecase';
import { CheckoutUseCase } from '../@core/application/usecases/product/checkout.usecase';
import { UI_NOTIFICATION_TOKEN } from '../@core/adapter/tokens/ui/notification.token';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-clean';
  products: Product[] = [];

  // private readonly productRepository = inject(PRODUCT_REPOSITORY_TOKEN);
  private readonly productRepository = inject(ProductRepository);
  private readonly notification = inject(UI_NOTIFICATION_TOKEN);

  constructor(
    private readonly getProductUseCase: GetProductUseCase,
    private readonly checkoutUseCase: CheckoutUseCase
  ) {
    this.getProductUseCase.execute().subscribe({
      next: (data) => {
        this.notification.showSuccess('Products loaded successfully');
        this.products = data;
      }
    });
  }

  buy(product: Product): void {
    this.checkoutUseCase.execute(product);
  }

  isAvailable(product: Product): boolean {
    return this.productRepository.available(product);
  }
}
