import { Category } from 'src/entity/category.entity';
import { CategoryService } from './category.service';
import { Request } from 'express';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    create(req: Request, body: Partial<Category>): Promise<Category>;
    update(id: string, req: Request, data: Partial<Category>): Promise<Category>;
    delete(id: string, req: Request): Promise<import("typeorm").DeleteResult>;
    getAllByUserId(req: Request): Promise<Category[]>;
}
