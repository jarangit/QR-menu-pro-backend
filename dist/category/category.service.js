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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../entity/category.entity");
const user_entity_1 = require("../entity/user.entity");
const product_service_1 = require("../product/product.service");
const typeorm_2 = require("typeorm");
let CategoryService = class CategoryService {
    constructor(categoryRepository, userRepository, productService) {
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
        this.productService = productService;
    }
    async create({ category, userId, }) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        try {
            if (user) {
                const newCat = this.categoryRepository.create({
                    ...category,
                    user,
                });
                return this.categoryRepository.save(newCat);
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(payload) {
        const { categoryId, data, userId } = payload;
        const foundCat = await this.categoryRepository.findOne({
            where: { id: +categoryId },
            relations: ["user"],
        });
        if (foundCat && foundCat.user.id === +userId) {
            Object.assign(foundCat, data);
            return this.categoryRepository.save(foundCat);
        }
        else {
            throw new common_1.NotFoundException();
        }
    }
    async delete(payload) {
        const { categoryId, userId } = payload;
        const foundProduct = await this.productService.findProductByCategoryId(+categoryId);
        if (foundProduct) {
            throw new common_1.HttpException("Product exists in this category", common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const category = await this.categoryRepository.findOne({
                where: { id: +categoryId },
                relations: ["user"],
            });
            if (category && category.user.id === +userId) {
                return await this.categoryRepository.delete(categoryId);
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getAllByUserId(userId) {
        try {
            const res = await this.categoryRepository.find({
                where: { user: { id: userId } },
            });
            return res;
        }
        catch (error) {
            throw error(error);
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        product_service_1.ProductService])
], CategoryService);
//# sourceMappingURL=category.service.js.map