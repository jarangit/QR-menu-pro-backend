import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
import { UtilsService } from "src/utils/utils.service";
export declare class UsersService {
    private readonly userRepository;
    protected readonly utilsService: UtilsService;
    constructor(userRepository: Repository<User>, utilsService: UtilsService);
    createUser(username: string, password: string): Promise<User>;
    findUserByUserName(username: string): Promise<User | undefined>;
    getUserById(id: number): Promise<User | undefined>;
}
