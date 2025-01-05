"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const error_filtter_1 = require("./middelwave/error-filtter");
const logger_1 = require("./middelwave/logger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: new logger_1.EmojiLogger(),
    });
    app.setGlobalPrefix("api");
    app.useGlobalFilters(new error_filtter_1.HttpExceptionFilter());
    app.enableCors({
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    });
    await app.listen(process.env.PORT || 3000, "0.0.0.0");
}
bootstrap();
//# sourceMappingURL=main.js.map