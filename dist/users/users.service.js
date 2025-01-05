"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const utils_service_1 = require("../utils/utils.service");
const mockDataUserImage = [
    "https://img.freepik.com/free-photo/close-up-beautiful-smiley-woman_23-2149093362.jpg?semt=ais_hybrid",
    "https://img.freepik.com/free-photo/black-model-posing_23-2148171735.jpg?t=st=1728356051~exp=1728359651~hmac=2da0439b684895c524f4138256928d3d0c5734bd9ee4df4beec98b14b0c78124&w=900",
    "https://img.freepik.com/free-photo/portrait-young-african-american-man-wearing-sunglasses_23-2148932876.jpg?t=st=1728356077~exp=1728359677~hmac=30feb1b22a19a9a364fea544276bfc01dc53e2712124df535e2728f23f538099&w=996",
];
let UsersService = class UsersService {
    constructor(userRepository, utilsService) {
        this.userRepository = userRepository;
        this.utilsService = utilsService;
    }
    async createUser(username, password) {
        const dupUserName = await this.userRepository.findOne({
            where: { username: username },
        });
        if (dupUserName) {
            throw new common_1.HttpException("dup username", common_1.HttpStatus.BAD_REQUEST);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = this.userRepository.create({
            username,
            password: hashedPassword,
            email: "my@email.com",
            profileImage: this.utilsService.getRandomImg(mockDataUserImage),
        });
        return this.userRepository.save(newUser);
    }
    async findUserByUserName(username) {
        return this.userRepository.findOne({ where: { username }, select: ['id', 'username', 'password'] });
    }
    async getUserById(id) {
        try {
            return this.userRepository.findOne({ where: { id } });
        }
        catch (error) {
            throw new common_1.HttpException(error.massage, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        utils_service_1.UtilsService])
], UsersService);
//# sourceMappingURL=users.service.js.map