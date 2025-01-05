"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3366,
    username: "sm_menu_user",
    password: "1234",
    database: "sm_menu_db",
    synchronize: true,
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    migrations: ['src/database/migrations/*-migration.ts'],
    migrationsRun: false,
    logging: true,
});
exports.default = AppDataSource;
//# sourceMappingURL=typeorm.config.js.map