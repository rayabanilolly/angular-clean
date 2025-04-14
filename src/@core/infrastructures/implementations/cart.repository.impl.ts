import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../../domain/entities/product.entitiy";
import { CartRepository } from "../../domain/repositories/cart.repository";
import { BaseResponse } from "../../shared/interfaces/base-response.interface";

@Injectable({
    providedIn: 'root'
})
export class CartRepositoryImpl implements CartRepository {

    constructor(
        private readonly http: HttpClient // Replace with actual HTTP client type
    ) { }

    add(product: Product): Observable<BaseResponse<null>> {
        return this.http.post<BaseResponse<null>>('http://127.0.0.1:3658/m1/876471-857891-default/cart/add', {
            product
        });
    }
}