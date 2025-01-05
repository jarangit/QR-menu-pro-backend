"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStCategoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_st_category_dto_1 = require("./create-st-category.dto");
class UpdateStCategoryDto extends (0, mapped_types_1.PartialType)(create_st_category_dto_1.CreateStCategoryDto) {
}
exports.UpdateStCategoryDto = UpdateStCategoryDto;
//# sourceMappingURL=update-st-category.dto.js.map