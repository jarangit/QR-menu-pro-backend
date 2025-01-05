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
exports.LikeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const like_entity_1 = require("../entity/like.entity");
const product_entity_1 = require("../entity/product.entity");
const user_entity_1 = require("../entity/user.entity");
const typeorm_2 = require("typeorm");
let LikeService = class LikeService {
    constructor(likesRepository, usersRepository, productsRepository) {
        this.likesRepository = likesRepository;
        this.usersRepository = usersRepository;
        this.productsRepository = productsRepository;
    }
    async create(payload) {
        const { userId, productId } = payload;
        const user = await this.usersRepository.findOne({
            where: { id: userId },
        });
        const product = await this.productsRepository.findOne({
            where: { id: productId },
        });
        if (product) {
            const data = {
                user,
                product,
            };
            return await this.likesRepository.save(data);
        }
        else {
            throw new common_1.HttpException("Not found product", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async toggle(payload) {
        const { userId, productId } = payload;
        const foundLiked = await this.likesRepository.findOne({
            where: {
                user: { id: userId },
                product: { id: productId },
            },
        });
        if (foundLiked) {
            return await this.unlike(foundLiked.id);
        }
        else {
            return await this.create({ ...payload });
        }
    }
    async unlike(id) {
        const foundLike = await this.likesRepository.findOne({
            where: { id: +id },
        });
        if (foundLike) {
            return this.likesRepository.remove(foundLike);
        }
        else {
            throw new common_1.NotFoundException("Not found liked");
        }
    }
    async getByProductId(productId) {
        const likes = await this.likesRepository.find({
            where: { product: { id: productId } },
            relations: ["user"],
        });
        return likes;
    }
};
exports.LikeService = LikeService;
exports.LikeService = LikeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(like_entity_1.Like)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], LikeService);
//# sourceMappingURL=like.service.js.map