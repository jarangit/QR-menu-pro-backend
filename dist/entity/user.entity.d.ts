import { Product } from './product.entity';
import { Category } from './category.entity';
import { Like } from './like.entity';
import { MyCollection } from './collection.entity';
import { Shop } from './shop.entity';
export declare class User {
    id: number;
    username: string;
    profileImage: string;
    password: string;
    email: string;
    createdAt: Date | null;
    products: Product[];
    categories: Category[];
    collections: MyCollection[];
    likes: Like[];
    Shop: Shop[];
}
