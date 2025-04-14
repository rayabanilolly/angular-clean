import { inject } from "@angular/core";
import { AddToCartUseCase } from "../../application/usecases/cart/add.usecase";
import CartRepositoryMock from "../mocks/cart.repository.mock";
import { CartRepositoryImpl } from "../implementations/cart.repository.impl";

export function AddToCartUseCaseFactory(): AddToCartUseCase {
    const cartRepository = inject(CartRepositoryImpl);
    return new AddToCartUseCase(cartRepository);
}