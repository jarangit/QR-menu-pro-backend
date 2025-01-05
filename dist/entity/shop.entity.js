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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const like_entity_1 = require("./like.entity");
let Shop = class Shop {
};
exports.Shop = Shop;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Shop.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Shop.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Shop.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Shop.prototype, "ownerName", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Shop.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Shop.prototype, "viewCount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Shop.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.Shop),
    __metadata("design:type", user_entity_1.User)
], Shop.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => like_entity_1.Like, (like) => like.Shop, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Shop.prototype, "likes", void 0);
exports.Shop = Shop = __decorate([
    (0, typeorm_1.Entity)()
], Shop);
//# sourceMappingURL=shop.entity.js.map