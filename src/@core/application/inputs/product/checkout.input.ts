import { Observable } from "rxjs";
import { Product } from "../../../domain/entities/product.entities";

export interface CheckoutInput {
    checkout(product: Product): Observable<string>;
}