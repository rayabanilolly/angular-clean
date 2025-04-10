import { HttpClient } from "@angular/common/http";
import { Product } from "../../domain/entities/product.entities";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductAPIService {
    constructor(private readonly http: HttpClient) {}

    get(): Observable<Product[]> {
        return this.http.get<Product[]>('http://127.0.0.1:3658/m1/876471-857891-default/products');
    }
}