import { LikeService } from './like.service';
export declare class LikeController {
    private readonly likeService;
    constructor(likeService: LikeService);
    create(productId: string, req: Request): Promise<{
        user: import("../entity/user.entity").User;
        product: import("../entity/product.entity").Product;
    } & import("../entity/like.entity").Like>;
    toggle(productId: string, req: Request): Promise<import("../entity/like.entity").Like>;
    getByProductId(productId: string): Promise<import("../entity/like.entity").Like[]>;
}
