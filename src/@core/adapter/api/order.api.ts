import { HttpClient } from "@angular/common/http";
import { Product } from "../../domain/entities/product.entities";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CheckoutInput } from "../../application/inputs/product/checkout.input";

@Injectable({
    providedIn: 'root'
})
export class OrderAPIService implements CheckoutInput {
    constructor(private readonly http: HttpClient) { }

    checkout(product: Product): Observable<string> {
        return this.http.post<string>('http://127.0.0.1:3658/m1/876471-857891-default/order/checkout', product);
    }
}