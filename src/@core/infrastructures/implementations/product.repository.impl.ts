import { Observable } from "rxjs";
import { ProductDTO, ProductRepository } from "../../domain/repositories/product.repository";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseResponse } from "../../shared/interfaces/base-response.interface";

@Injectable({
    providedIn: 'root'
})
export class ProductRepositoryImpl implements ProductRepository {

    constructor(
        private readonly http: HttpClient // Replace with actual HTTP client type
    ) {}

    getProducts(): Observable<BaseResponse<ProductDTO[]>> {
        return this.http.get<BaseResponse<ProductDTO[]>>('http://127.0.0.1:3658/m1/876471-857891-default/products');
    }
}