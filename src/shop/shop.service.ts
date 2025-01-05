import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { Shop } from 'src/entity/shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private readonly ShopRepository: Repository<Shop>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  // สร้าง Shop
  async createShop({ data, userId }: { data: Partial<Shop>, userId: number }): Promise<Shop> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const body = {
      ...data,
      user,
    }

    const newShop = this.ShopRepository.create(body);
    return this.ShopRepository.save(newShop);
  }

  // ดึง Shop ทั้งหมด
  async getAllShops(): Promise<Shop[]> {
    const data: any = await this.ShopRepository.find({
      relations: ['user'],
    });
    return data
  }

  // ดึง Shop ตาม ID
  async getShopById(id: string): Promise<Shop> {
    return this.ShopRepository.findOne({ where: { id } });
  }

  async getShopByUserId(id: number): Promise<Shop> {
    return this.ShopRepository.findOne({
      where: { user: { id: id } },
    });
  }
}
