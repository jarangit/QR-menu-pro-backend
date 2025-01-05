import { Body, Controller, Get, NotFoundException, Param, Post, Req } from '@nestjs/common';
import { ShopService } from './shop.service';
import { Shop } from 'src/entity/shop.entity';

@Controller('auth/shop')
export class ShopController {
  constructor(private readonly ShopService: ShopService) { }

  // POST /Shops
  @Post()
  async createShop(@Req() req: Request, @Body() data: Partial<Shop>): Promise<Shop> {
    const user = req['user']
    const hasData = await this.ShopService.getShopByUserId(user.id);
    if (hasData) {
      throw new NotFoundException('Shop already exists');
    }
    return this.ShopService.createShop({ data, userId: user.id });
  }

  // GET /Shops
  @Get()
  async getAllShops(): Promise<any> {
    // return 'Hello World';
    return this.ShopService.getAllShops();
  }

  // GET /Shops/:id
  @Get(':id')
  async getShopById(@Param('id') id: string): Promise<Shop> {
    return this.ShopService.getShopById(id);
  }

  @Get('user/:id')
  async getShopByUserId(@Param('id') id: number): Promise<any> {
    return this.ShopService.getShopByUserId(id);
  }
}
