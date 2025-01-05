"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const product_module_1 = require("./product/product.module");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const headers_middleware_1 = require("./headers/headers.middleware");
const jwt_1 = require("@nestjs/jwt");
const category_module_1 = require("./category/category.module");
const like_module_1 = require("./like/like.module");
const logging_1 = require("./middelwave/logging");
const utils_service_1 = require("./utils/utils.service");
const utils_module_1 = require("./utils/utils.module");
const product_module_2 = require("./public-api/product/product.module");
const user_module_1 = require("./public-api/user/user.module");
const collection_module_1 = require("./collection/collection.module");
const config_1 = require("@nestjs/config");
const st_category_module_1 = require("./system-data/st-category/st-category.module");
const shop_module_1 = require("./shop/shop.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(headers_middleware_1.HeadersMiddleware, logging_1.LoggerMiddleware)
            .forRoutes({ path: "auth/*", method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => {
                    const isLocal = process.env.ENV === "local";
                    console.log('isLocal', isLocal);
                    if (isLocal) {
                        return {
                            type: "mysql",
                            host: "localhost",
                            port: 3366,
                            username: "sm_menu_user",
                            password: "1234",
                            database: "sm_menu_db",
                            entities: [__dirname + "/**/*.entity{.ts,.js}"],
                            synchronize: true,
                        };
                    }
                    else {
                        return {
                            type: "mysql",
                            url: process.env.DATABASE_URL,
                            autoLoadEntities: true,
                            synchronize: false,
                        };
                    }
                },
            }),
            users_module_1.UsersModule,
            product_module_1.ProductModule,
            category_module_1.CategoryModule,
            like_module_1.LikeModule,
            utils_module_1.UtilsModule,
            product_module_2.ProductModule,
            user_module_1.UserModule,
            collection_module_1.CollectionModule,
            st_category_module_1.StCategoryModule,
            shop_module_1.ShopModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            jwt_1.JwtService,
            utils_service_1.UtilsService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map