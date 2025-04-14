import { Observable, of } from "rxjs";
import { ProductDTO, ProductRepository } from "../../domain/repositories/product.repository";
import { Injectable } from "@angular/core";
import { BaseResponse } from "../../shared/interfaces/base-response.interface";

@Injectable({
    providedIn: 'root'
})
export default class ProductRepositoryMock implements ProductRepository {
    getProducts(): Observable<BaseResponse<ProductDTO[]>> {
        // Simulate an API call
        return of({
            message: "Products fetched successfully",
            data: [
                { id: "1", name: "Product 1", price: 100, stock: 0 },
                { id: "2", name: "Product 2", price: 200, stock: 5 }
            ]
        });
    }
}