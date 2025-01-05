import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Like } from './like.entity';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  ownerName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0 })
  viewCount: number;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => User, (user) => user.Shop)
  user: User;

  @OneToMany(() => Like, (like) => like.Shop, { onDelete: 'CASCADE' })
  likes: Like[]
}