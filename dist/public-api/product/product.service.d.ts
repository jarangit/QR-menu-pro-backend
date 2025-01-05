import { Product } from "src/entity/product.entity";
import { Repository } from "typeorm";
export declare class ProductService {
    private productRepository;
    queryProduct: any;
    constructor(productRepository: Repository<Product>);
    incrementViewCount(productId: number): Promise<void>;
    getProducts(): Promise<any[]>;
    getProductById(id: number): Promise<any>;
    findByUserId(userId: number): Promise<Product[]>;
}
