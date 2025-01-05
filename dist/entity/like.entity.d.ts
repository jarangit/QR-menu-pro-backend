import { Product } from "./product.entity";
import { User } from "./user.entity";
import { Shop } from "./shop.entity";
export declare class Like {
    id: number;
    createdAt: Date | null;
    user: User;
    product: Product;
    Shop: Shop;
}
