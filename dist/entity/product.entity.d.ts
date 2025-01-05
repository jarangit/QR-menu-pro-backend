import { User } from './user.entity';
import { Category } from './category.entity';
import { Like } from './like.entity';
import { MyCollection } from './collection.entity';
import { StCategory } from './st-category.entity';
export declare class Product {
    id: number;
    name: string;
    thumbnail: string;
    description: string;
    price: number;
    stock: number;
    viewCount: number;
    createdAt: Date | null;
    user: User;
    category: Category;
    6023: any;
    STCategory: StCategory;
    collection: MyCollection;
    likes: Like[];
}
