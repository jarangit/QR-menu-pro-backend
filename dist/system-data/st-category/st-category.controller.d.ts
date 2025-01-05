import { StCategoryService } from './st-category.service';
import { CreateStCategoryDto } from './dto/create-st-category.dto';
import { UpdateStCategoryDto } from './dto/update-st-category.dto';
export declare class StCategoryController {
    private readonly stCategoryService;
    constructor(stCategoryService: StCategoryService);
    create(createStCategoryDto: CreateStCategoryDto): Promise<CreateStCategoryDto & import("../../entity/st-category.entity").StCategory>;
    findAll(): Promise<import("../../entity/st-category.entity").StCategory[]>;
    findOne(id: string): string;
    update(id: string, updateStCategoryDto: UpdateStCategoryDto): string;
    remove(id: string): string;
}
