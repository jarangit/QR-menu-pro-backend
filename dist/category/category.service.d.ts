import { Category } from "src/entity/category.entity";
import { User } from "src/entity/user.entity";
import { ProductService } from "src/product/product.service";
import { Repository } from "typeorm";
export declare class CategoryService {
    private categoryRepository;
    private userRepository;
    private readonly productService;
    constructor(categoryRepository: Repository<Category>, userRepository: Repository<User>, productService: ProductService);
    create({ category, userId, }: {
        category: Partial<Category>;
        userId: number;
    }): Promise<Category>;
    update(payload: {
        categoryId: string;
        data: Partial<Category>;
        userId: string;
    }): Promise<Category>;
    delete(payload: {
        categoryId: string;
        userId: string;
    }): Promise<import("typeorm").DeleteResult>;
    getAllByUserId(userId: number): Promise<Category[]>;
}
