import { UsersService } from "./users.service";
import { AuthService } from "src/auth/auth.service";
export declare class UsersController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UsersService, authService: AuthService);
    register(body: {
        username: string;
        password: string;
    }): Promise<import("../entity/user.entity").User>;
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    getUserById(id: string): Promise<import("../entity/user.entity").User>;
}
