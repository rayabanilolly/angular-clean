import { Observable } from "rxjs";
import { Product } from "../../domain/entities/product.entities";

export type TCheckoutReponse = {
    message: string;
}

export interface OrderInput {
    checkout(product: Product): Observable<TCheckoutReponse>;
}