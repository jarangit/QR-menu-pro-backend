import { Request } from 'express';
import { CollectionService } from './collection.service';
import { MyCollection } from 'src/entity/collection.entity';
export declare class CollectionController {
    private collectionService;
    constructor(collectionService: CollectionService);
    create(req: Request, body: Partial<MyCollection>): Promise<MyCollection>;
    update(id: string, req: Request, data: Partial<MyCollection>): Promise<MyCollection>;
    delete(id: string, req: Request): Promise<import("typeorm").DeleteResult>;
    getAllByUserId(req: Request): Promise<MyCollection[]>;
}
