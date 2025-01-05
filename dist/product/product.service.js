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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../entity/category.entity");
const collection_entity_1 = require("../entity/collection.entity");
const like_entity_1 = require("../entity/like.entity");
const product_entity_1 = require("../entity/product.entity");
const st_category_entity_1 = require("../entity/st-category.entity");
const user_entity_1 = require("../entity/user.entity");
const utils_service_1 = require("../utils/utils.service");
const typeorm_2 = require("typeorm");
const mockUrlImage = [
    'https://img.freepik.com/free-photo/autumn-landscape-background-illustration_23-2151844215.jpg?t=st=1728354534~exp=1728358134~hmac=63253537ffc611fe7232ea8f64d39bc810b196b0a278d541bbb791e899add082&w=740',
    'https://img.freepik.com/premium-vector/farm-landscape-farm-field-retro-sketch-hand-drawn-rural-area-farm-sketch-farm-drawing_1168528-4825.jpg?w=1380',
    'https://img.freepik.com/free-photo/retro-cameras_144627-12214.jpg?t=st=1728830732~exp=1728834332~hmac=7df6f0ba72894caa9e344f378b120d60c98ad9b652b8e235b848c3bba07e7567&w=2000',
    'https://img.freepik.com/free-photo/headstock-classical-fingerboard-wood-fretboard_1172-289.jpg?ga=GA1.1.1806154199.1728353290&semt=ais_hybrid-rr-similar',
    'https://img.freepik.com/free-photo/electric-guitar-still-life_23-2151376253.jpg?ga=GA1.1.1806154199.1728353290&semt=ais_hybrid-rr-similar',
    'https://img.freepik.com/free-photo/colorful-slip-unisex-streetwear-sneakers-fashion_53876-101518.jpg?t=st=1728830655~exp=1728834255~hmac=a1032442c0a40b0b73b178e2b87bfcf864aa951fcfac6aeefe3236821bfc704a&w=2000'
];
let ProductService = class ProductService {
    constructor(productsRepository, userRepository, categoryRepository, collectionRepository, stCategoryRepository, likeRepository, utilsService) {
        this.productsRepository = productsRepository;
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
        this.collectionRepository = collectionRepository;
        this.stCategoryRepository = stCategoryRepository;
        this.likeRepository = likeRepository;
        this.utilsService = utilsService;
    }
    async create({ product, userId, }) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        const mockData = {
            description: "การวาดภาพทะเลทำให้ฉันรู้สึกถึงความสงบและอิสระของธรรมชาติ เส้นขอบฟ้าที่เชื่อมต่อระหว่างน้ำและฟ้าสะท้อนถึงความไม่มีที่สิ้นสุดของจินตนาการ เสียงคลื่นที่กระทบฝั่งช่วยให้ฉันปล่อยความคิดและเติมพลังสร้างสรรค์ในทุกลายเส้น"
        };
        if (user) {
            const collection = await this.collectionRepository.findOne({
                where: { id: product.collectionId },
            });
            const stCategory = await this.stCategoryRepository.findOne({
                where: { id: product.stCategoryId },
            });
            console.log("🚀 ~ ProductService ~ stCategory:", stCategory);
            const newProduct = this.productsRepository.create({
                ...product,
                thumbnail: this.utilsService.getRandomImg(mockUrlImage),
                description: mockData.description,
                user,
                collection: collection ?? null,
                STCategory: stCategory ?? null,
            });
            return this.productsRepository.save(newProduct);
        }
        else {
            throw new Error("User not found");
        }
    }
    async updateProduct(payload) {
        const { id, productData, userId } = payload;
        const product = await this.productsRepository.findOne({
            where: { id },
            relations: ["user"],
        });
        if (productData.categoryId) {
            const category = await this.categoryRepository.findOne({
                where: { id: productData.categoryId },
            });
            product.category = category;
        }
        const isOwner = product.user.id === userId;
        if (!product && !isOwner) {
            throw new common_1.NotFoundException("not found product");
        }
        Object.assign(product, productData);
        return await this.productsRepository.save(product);
    }
    async findAll() {
        const products = await this.productsRepository.find({
            relations: ["user"],
        });
        products.forEach(async (p) => {
            if (p && p.user) {
                p.user = await this.utilsService.removeKeysObj({
                    obj: p.user,
                    keysToRemove: ["password"],
                });
            }
        });
        return products;
    }
    async findProductByUserId(userId) {
        const res = await this.productsRepository.find({
            where: { user: { id: userId } },
            relations: ["collection", "user", "STCategory"],
        });
        return res;
    }
    async findProductByCategoryId(categoryId) {
        const res = await this.productsRepository.find({
            where: { category: { id: categoryId } },
        });
        return res;
    }
    async findProductByCollectionId(collectionId) {
        const res = await this.productsRepository.find({
            where: { category: { id: collectionId } },
        });
        return res;
    }
    findById(id) {
        return this.productsRepository.findOne({
            where: { id },
            relations: ["user", "collection"],
        });
    }
    async remove(productId) {
        await this.likeRepository.delete({ product: { id: productId } });
        await this.productsRepository.delete(productId);
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __param(3, (0, typeorm_1.InjectRepository)(collection_entity_1.MyCollection)),
    __param(4, (0, typeorm_1.InjectRepository)(st_category_entity_1.StCategory)),
    __param(5, (0, typeorm_1.InjectRepository)(like_entity_1.Like)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        utils_service_1.UtilsService])
], ProductService);
//# sourceMappingURL=product.service.js.map