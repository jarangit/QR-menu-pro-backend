import { ProductDTO } from 'src/dto/product.dto';
import { ProductService } from './product.service';
import { Product } from 'src/entity/product.entity';
export declare class ProductController {
    private readonly productsService;
    constructor(productsService: ProductService);
    create(req: Request, product: Partial<Product>): Promise<any>;
    update(productId: string, req: Request, product: Partial<Product>): Promise<Product>;
    findAll(): Promise<ProductDTO[]>;
    findByUserId(userId: string): Promise<Product[]>;
    findByCategoryId(id: string): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    remove(id: number): Promise<void>;
}
