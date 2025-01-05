import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { Shop } from 'src/entity/shop.entity';
export declare class ShopService {
    private readonly ShopRepository;
    private userRepository;
    constructor(ShopRepository: Repository<Shop>, userRepository: Repository<User>);
    createShop({ data, userId }: {
        data: Partial<Shop>;
        userId: number;
    }): Promise<Shop>;
    getAllShops(): Promise<Shop[]>;
    getShopById(id: string): Promise<Shop>;
    getShopByUserId(id: number): Promise<Shop>;
}
