import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
config();

const configService = new ConfigService();


const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3366,
  username: "sm_menu_user",
  password: "1234",
  database: "sm_menu_db",
  synchronize: true, // ใช้เฉพาะใน Local Dev
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  migrations: ['src/database/migrations/*-migration.ts'],
  migrationsRun: false,
  logging: true,
});

export default AppDataSource;