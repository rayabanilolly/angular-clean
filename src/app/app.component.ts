import { Component, inject } from '@angular/core'
import { Product } from '../@core/domain/entities/product.entitiy';
import { CommonModule } from '@angular/common';
import { UI_NOTIFICATION_TOKEN } from '../@core/adapter/tokens/ui/notification.token';
import { GetProductUseCaseFactory } from '../@core/infrastructures/factories/product.factory';
import { take } from 'rxjs';
import { ProductDTO } from '../@core/domain/repositories/product.repository';
import { AddToCartUseCaseFactory } from '../@core/infrastructures/factories/cart.factory';
import { BaseResponse } from '../@core/shared/interfaces/base-response.interface';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-clean';
  products: ProductDTO[] = [];

  // private readonly productRepository = inject(PRODUCT_REPOSITORY_TOKEN);
  // private readonly productRepository = inject(ProductRepository);
  private readonly notification = inject(UI_NOTIFICATION_TOKEN);

  private readonly getProductUseCase = GetProductUseCaseFactory();
  private readonly addToCartUseCase = AddToCartUseCaseFactory();

  constructor() {
    this.getProducts();
  }

  getProducts(): void {
    this.getProductUseCase
      .execute()
      .pipe(take(1))
      .subscribe({
        next: (data: BaseResponse<ProductDTO[]>) => this.products = data.data ?? [],
        error: () => {
          this.notification.showError('Error fetching products');
        }
      })
  }

  addToCart(product: ProductDTO): void {  
    const p = product as unknown as Product; // need better casting

    this.addToCartUseCase.execute(p)
      .pipe(take(1))
      .subscribe({
        next: (resp) => {
          this.notification.showSuccess(resp.message);
        },
        error: (error: HttpErrorResponse) => {
          this.notification.showError(error.message);
        }
      });
  }

  // isAvailable(product: Product): boolean {
  //   return this.productRepository.available(product);
  // }
}
