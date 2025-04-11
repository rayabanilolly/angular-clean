import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductAPIService } from "../../../adapter/api/product.api";
import { Product } from "../../../domain/entities/product.entities";

@Injectable({
    providedIn: 'root'
})
export class GetProductUseCase {
    constructor(
        private readonly productAPIService: ProductAPIService,
        // private readonly productMock: ProductMock
    ) {}

    execute(): Observable<Product[]> {
        return this.productAPIService.get();
    }
}