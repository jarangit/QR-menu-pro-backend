import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Shop } from 'src/entity/shop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shop, User])], // เพิ่ม Entity ที่ต้องการ
  providers: [ShopService],
  controllers: [ShopController]
})
export class ShopModule { }
