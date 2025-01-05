import { User } from './user.entity';
import { Like } from './like.entity';
export declare class Shop {
    id: string;
    name: string;
    address: string;
    ownerName: string;
    isActive: boolean;
    viewCount: number;
    createdAt: Date | null;
    user: User;
    likes: Like[];
}
