import { LikeDTO } from "src/dto/like.dto";
import { Like } from "src/entity/like.entity";
import { Product } from "src/entity/product.entity";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
export declare class LikeService {
    private likesRepository;
    private usersRepository;
    private productsRepository;
    constructor(likesRepository: Repository<Like>, usersRepository: Repository<User>, productsRepository: Repository<Product>);
    create(payload: LikeDTO): Promise<{
        user: User;
        product: Product;
    } & Like>;
    toggle(payload: LikeDTO): Promise<Like>;
    unlike(id: number): Promise<Like>;
    getByProductId(productId: number): Promise<Like[]>;
}
