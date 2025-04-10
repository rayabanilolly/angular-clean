import { ProductRepository } from "../../application/repositories/product.repository";

export class HttpProductService implements ProductRepository {
    getProducts(): Promise<any[]> {
        return fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .catch((error) => {
                console.error('Error fetching products:', error);
                throw error;
            });
    }
}