import { Product } from "src/entity/product.entity";
export declare class StCategory {
    id: number;
    name: string;
    description: string;
    createdAt: Date | null;
    products: Product[];
}
