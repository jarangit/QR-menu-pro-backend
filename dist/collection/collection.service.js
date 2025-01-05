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
exports.CollectionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const collection_entity_1 = require("../entity/collection.entity");
const user_entity_1 = require("../entity/user.entity");
const product_service_1 = require("../product/product.service");
const typeorm_2 = require("typeorm");
let CollectionService = class CollectionService {
    constructor(collectionRepository, userRepository, productService) {
        this.collectionRepository = collectionRepository;
        this.userRepository = userRepository;
        this.productService = productService;
    }
    async create({ collection, userId, }) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        try {
            if (user) {
                const newCat = this.collectionRepository.create({
                    ...collection,
                    user,
                });
                return this.collectionRepository.save(newCat);
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(payload) {
        const { collectionId, data, userId } = payload;
        const foundCat = await this.collectionRepository.findOne({
            where: { id: +collectionId },
            relations: ["user"],
        });
        if (foundCat && foundCat.user.id === +userId) {
            Object.assign(foundCat, data);
            return this.collectionRepository.save(foundCat);
        }
        else {
            throw new common_1.NotFoundException();
        }
    }
    async delete(payload) {
        const { collectionId, userId } = payload;
        const foundProduct = await this.productService.findProductByCollectionId(+collectionId);
        const isHasProduct = foundProduct && foundProduct.length > 0;
        if (isHasProduct) {
            throw new common_1.HttpException("Product exists in this collection", common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const collection = await this.collectionRepository.findOne({
                where: { id: +collectionId },
                relations: ["user"],
            });
            if (collection && collection.user.id === +userId) {
                return await this.collectionRepository.delete(collectionId);
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getAllByUserId(userId) {
        try {
            const res = await this.collectionRepository.find({
                where: { user: { id: userId } },
            });
            return res;
        }
        catch (error) {
            throw error(error);
        }
    }
};
exports.CollectionService = CollectionService;
exports.CollectionService = CollectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(collection_entity_1.MyCollection)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        product_service_1.ProductService])
], CollectionService);
//# sourceMappingURL=collection.service.js.map