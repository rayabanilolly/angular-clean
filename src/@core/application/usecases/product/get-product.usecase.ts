import { map, Observable } from "rxjs";
import { ProductDTO } from "../../../domain/repositories/product.repository";
import { ProductRepositoryImpl } from "../../../infrastructures/implementations/product.repository.impl";
import ProductRepositoryMock from "../../../infrastructures/mocks/product.repository.mock";
import { Product, ProductItem } from "../../../domain/entities/product.entitiy";
import { BaseResponse } from "../../../shared/interfaces/base-response.interface";

export class GetProductUseCase {
    constructor(
        private readonly productRepository: ProductRepositoryImpl | ProductRepositoryMock
    ) {}

    execute(): Observable<BaseResponse<ProductDTO[]>> {
        return this.productRepository.getProducts().pipe(
            map(response => ({
                message: response.message,
                data: response.data?.map(item => {
                    const product = new Product(item as unknown as ProductItem); // need better type casting

                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        stock: item.stock,
                        available: product.available(),
                    }
                })
            }))
        );
    }
}