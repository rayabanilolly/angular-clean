import { Observable, of } from "rxjs";
import { Product } from "../../domain/entities/product.entities";
import { Injectable } from "@angular/core";
import { GetProductOutput } from "../../application/outputs/product.output";

@Injectable({
    providedIn: 'root'
})
export class ProductMock implements GetProductOutput {
    get(): Observable<Product[]> {
        return of([
            { id: '1', name: 'Product 1', price: 250000, stock: 10 },
            { id: '2', name: 'Product 2', price: 440000, stock: 0 },
            { id: '3', name: 'Product 3', price: 85000, stock: 30 },
        ]);
    }
}