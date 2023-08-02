import type {ImagePropsType} from '@/shared/type/imageProps.type';
import type {Tag} from '@/shared/type/tag.type';

export type PostType = {
    id?: number,
    slug: string,
    title: string,
    body: string,
    author: string,
    createdAt: Date,
    updatedAt: Date,
    coverImage: ImagePropsType,
    tags: Tag[]
}