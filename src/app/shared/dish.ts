import { Comment } from './comment';

export class Dish {
    id!: number;
    name!: string;
    image!:string;
    category!: string;
    featured!: string;
    label!: string;
    price!: number;
    description!: string;
    // comments!: Comment[];
}

