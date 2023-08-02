import {PostType} from '@/shared/type/post.type';
import {Card} from '@/components/ui/card/card';

async function findPostsByTag(tagSlug: string): Promise<PostType[]> {
    return new Promise((resolve) => resolve([
        {
            title: 'un titre',
            author: 'moi',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolores dolorum eius ipsa ipsum iure nam nemo porro, praesentium quis quo quos reprehenderit rerum tempore tenetur velit voluptates. Modi, veritatis.',
            updatedAt: new Date(),
            id: 1,
            createdAt: new Date(),
            tags: [
                {
                    id: 1,
                    label: 'tag',
                    slug: 'tag'
                }
            ],
            slug: '',
            coverImage: {
                alt: '',
                src: 'https://jooinn.com/images/mountain-range-111.jpg',
                width: 4922,
                height: 3285
            }
        }
    ]))
}

export default async function PostByTag({params}: {params: {slug: string}}) {
    const posts: PostType[] = await findPostsByTag(params.slug);
    return <>
        <h1 className="text-xl text-headline-primary">{params.slug}</h1>
        <div className="w-full flex flex-col gap-6 sm:grid">
            {posts.map((post, i) => <Card key={i} post={post} />)}
        </div>
    </>
}