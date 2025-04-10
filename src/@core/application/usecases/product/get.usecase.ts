import { Observable } from "rxjs";
import { ProductAPIService } from "../../../adapter/api/product.service";
import { Product } from "../../../domain/entities/product.entities";
import { GetProductOutput } from "../../outputs/product/get.output";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GetProductUseCase implements GetProductOutput{
    constructor(private readonly productAPIService: ProductAPIService) {}

    get(): Observable<Product[]> {
        return this.productAPIService.get();
    }
}