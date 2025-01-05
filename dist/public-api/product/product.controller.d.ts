import { ProductService } from "./product.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(): Promise<any[]>;
    getProductById(id: string): Promise<any>;
    getProductByUserId(userId: string): Promise<import("../../entity/product.entity").Product[]>;
    viewProduct(id: number): Promise<void>;
}
