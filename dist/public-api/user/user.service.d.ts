import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getUserById(id: number): Promise<User>;
}
