import { ProductDTO } from "src/dto/product.dto";
import { Category } from "src/entity/category.entity";
import { MyCollection } from "src/entity/collection.entity";
import { Like } from "src/entity/like.entity";
import { Product } from "src/entity/product.entity";
import { StCategory } from "src/entity/st-category.entity";
import { User } from "src/entity/user.entity";
import { UtilsService } from "src/utils/utils.service";
import { Repository } from "typeorm";
export declare class ProductService {
    private productsRepository;
    private userRepository;
    private categoryRepository;
    private collectionRepository;
    private stCategoryRepository;
    private likeRepository;
    private readonly utilsService;
    constructor(productsRepository: Repository<Product>, userRepository: Repository<User>, categoryRepository: Repository<Category>, collectionRepository: Repository<MyCollection>, stCategoryRepository: Repository<StCategory>, likeRepository: Repository<Like>, utilsService: UtilsService);
    create({ product, userId, }: {
        product: Partial<ProductDTO>;
        userId: number;
    }): Promise<Product>;
    updateProduct(payload: {
        id: number;
        productData: Partial<ProductDTO>;
        userId: number;
    }): Promise<Product>;
    findAll(): Promise<ProductDTO[]>;
    findProductByUserId(userId: number): Promise<Product[]>;
    findProductByCategoryId(categoryId: number): Promise<Product[]>;
    findProductByCollectionId(collectionId: number): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    remove(productId: number): Promise<void>;
}
