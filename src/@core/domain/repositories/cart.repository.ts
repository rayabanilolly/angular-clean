import { Observable } from "rxjs";
import { BaseResponse } from "../../shared/interfaces/base-response.interface";
import { Product } from "../entities/product.entitiy";

export interface CartRepository {
    add(product: Product, qty: number): Observable<BaseResponse<null>>;
}