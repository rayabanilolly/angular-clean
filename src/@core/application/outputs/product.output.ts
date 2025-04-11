import { Observable } from "rxjs";
import { Product } from "../../domain/entities/product.entities";

export interface GetProductOutput {
    get(): Observable<Product[]>;
}