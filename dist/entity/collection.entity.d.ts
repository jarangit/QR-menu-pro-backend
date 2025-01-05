import { User } from "./user.entity";
import { Product } from "./product.entity";
export declare class MyCollection {
    id: number;
    name: string;
    description: string;
    createdAt: Date | null;
    user: User;
    products: Product[];
}
