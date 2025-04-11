import { HttpClient } from "@angular/common/http";
import { Product } from "../../domain/entities/product.entities";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { OrderInput, TCheckoutReponse } from "../../application/inputs/order.input";

@Injectable({
    providedIn: 'root'
})
export class OrderAPIService implements OrderInput {
    constructor(private readonly http: HttpClient) { }

    checkout(product: Product): Observable<TCheckoutReponse> {
        return this.http.post<TCheckoutReponse>('http://127.0.0.1:3658/m1/876471-857891-default/order/checkout', product);
    }
}