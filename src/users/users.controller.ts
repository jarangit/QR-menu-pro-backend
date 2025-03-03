import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthService } from "src/auth/auth.service";

@Controller("users")
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post("register")
  async register(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    return this.userService.createUser(username, password);
  }

  @Post("login")
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    const user = await this.authService.validateUser(username, password);
    return this.authService.login(user);
  }

  @Get(":id")
  async getUserById(@Param("id") id: string) {
    return this.userService.getUserById(+id);
  }
}
