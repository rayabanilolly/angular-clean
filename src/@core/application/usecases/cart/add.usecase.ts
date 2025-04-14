import { Observable } from "rxjs";
import { Product } from "../../../domain/entities/product.entitiy";
import CartRepositoryMock from "../../../infrastructures/mocks/cart.repository.mock";
import { BaseResponse } from "../../../shared/interfaces/base-response.interface";

export class AddToCartUseCase {
    constructor(
        private readonly cartReposiotry: CartRepositoryMock
    ) {}

    execute(product: Product): Observable<BaseResponse<null>> {
        return this.cartReposiotry.add(product);
    }
}