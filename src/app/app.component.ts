import { Component } from '@angular/core'
import { GetProductUseCase } from '../@core/application/usecases/product/get.usecase';
import { Product } from '../@core/domain/entities/product.entities';
import { ProductRepository } from '../@core/domain/repositories/product.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-clean';
  products: Product[] = [];

  constructor(
    private readonly getProductUseCase: GetProductUseCase,
    private readonly productRepository: ProductRepository
  ) {
    this.getProductUseCase.get().subscribe({
      next: (data) => {
        this.products = data;
      }
    });
  }

  isAvailable(product: Product): boolean {
    return this.productRepository.available(product);
  }
}
