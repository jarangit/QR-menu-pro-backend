import { NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
export declare class HeadersMiddleware implements NestMiddleware {
    private readonly jwt;
    constructor(jwt: JwtService);
    use(req: any, res: any, next: () => void): void;
}
