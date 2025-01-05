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
exports.StCategoryController = void 0;
const common_1 = require("@nestjs/common");
const st_category_service_1 = require("./st-category.service");
const create_st_category_dto_1 = require("./dto/create-st-category.dto");
const update_st_category_dto_1 = require("./dto/update-st-category.dto");
let StCategoryController = class StCategoryController {
    constructor(stCategoryService) {
        this.stCategoryService = stCategoryService;
    }
    create(createStCategoryDto) {
        return this.stCategoryService.create(createStCategoryDto);
    }
    findAll() {
        return this.stCategoryService.findAll();
    }
    findOne(id) {
        return this.stCategoryService.findOne(+id);
    }
    update(id, updateStCategoryDto) {
        return this.stCategoryService.update(+id, updateStCategoryDto);
    }
    remove(id) {
        return this.stCategoryService.remove(+id);
    }
};
exports.StCategoryController = StCategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_st_category_dto_1.CreateStCategoryDto]),
    __metadata("design:returntype", void 0)
], StCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_st_category_dto_1.UpdateStCategoryDto]),
    __metadata("design:returntype", void 0)
], StCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StCategoryController.prototype, "remove", null);
exports.StCategoryController = StCategoryController = __decorate([
    (0, common_1.Controller)('/system/st-category'),
    __metadata("design:paramtypes", [st_category_service_1.StCategoryService])
], StCategoryController);
//# sourceMappingURL=st-category.controller.js.map