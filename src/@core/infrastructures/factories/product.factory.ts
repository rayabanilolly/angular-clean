import { inject } from "@angular/core";
import { GetProductUseCase } from "../../application/usecases/product/get-product.usecase";
import { ProductRepositoryImpl } from "../implementations/product.repository.impl";
// import ProductRepositoryMock from "../mocks/product.repository.mock";

export function GetProductUseCaseFactory(): GetProductUseCase {
    const productRepository = inject(ProductRepositoryImpl);
    return new GetProductUseCase(productRepository);
}