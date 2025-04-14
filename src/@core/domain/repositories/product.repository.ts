import { Observable } from "rxjs";
import { BaseResponse } from "../../shared/interfaces/base-response.interface";

export interface ProductDTO {
    id: string;
    name: string;
    price: number;
    stock: number;
    available?: boolean;
}

export interface ProductRepository {
    getProducts(): Observable<BaseResponse<ProductDTO[]>>;
}