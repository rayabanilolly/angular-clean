import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CartRepository } from "../../domain/repositories/cart.repository";
import { BaseResponse } from "../../shared/interfaces/base-response.interface";
import { Product } from "../../domain/entities/product.entitiy";

@Injectable({
    providedIn: 'root'
})
export default class CartRepositoryMock implements CartRepository {
    add(product: Product): Observable<BaseResponse<null>> {
        // Simulate an API call
        return of({
            message: "success added product to your cart",
        });
    }
}