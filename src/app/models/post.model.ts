export class PostModel {
    id: number;
    titulo: string;
    image_url?: string;
    user_id: number;
    created_at?: Date;
    updated_at?: Date;

    constructor() {}
}