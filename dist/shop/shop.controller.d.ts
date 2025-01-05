import { ShopService } from './shop.service';
import { Shop } from 'src/entity/shop.entity';
export declare class ShopController {
    private readonly ShopService;
    constructor(ShopService: ShopService);
    createShop(req: Request, data: Partial<Shop>): Promise<Shop>;
    getAllShops(): Promise<any>;
    getShopById(id: string): Promise<Shop>;
    getShopByUserId(id: number): Promise<any>;
}
