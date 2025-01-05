import { MyCollection } from "src/entity/collection.entity";
import { User } from "src/entity/user.entity";
import { ProductService } from "src/product/product.service";
import { Repository } from "typeorm";
export declare class CollectionService {
    private collectionRepository;
    private userRepository;
    private readonly productService;
    constructor(collectionRepository: Repository<MyCollection>, userRepository: Repository<User>, productService: ProductService);
    create({ collection, userId, }: {
        collection: Partial<MyCollection>;
        userId: number;
    }): Promise<MyCollection>;
    update(payload: {
        collectionId: string;
        data: Partial<MyCollection>;
        userId: string;
    }): Promise<MyCollection>;
    delete(payload: {
        collectionId: string;
        userId: string;
    }): Promise<import("typeorm").DeleteResult>;
    getAllByUserId(userId: number): Promise<MyCollection[]>;
}
