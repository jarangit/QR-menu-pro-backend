import { CreateStCategoryDto } from "./dto/create-st-category.dto";
import { UpdateStCategoryDto } from "./dto/update-st-category.dto";
import { Repository } from "typeorm";
import { StCategory } from "src/entity/st-category.entity";
export declare class StCategoryService {
    private readonly stCategoryRepository;
    constructor(stCategoryRepository: Repository<StCategory>);
    create(createStCategoryDto: CreateStCategoryDto): Promise<CreateStCategoryDto & StCategory>;
    findAll(): Promise<StCategory[]>;
    findOne(id: number): string;
    update(id: number, updateStCategoryDto: UpdateStCategoryDto): string;
    remove(id: number): string;
}
