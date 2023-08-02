import Image from 'next/image';
import {PostType} from '@/shared/type/post.type';
import Tag from '@/components/ui/tag';
import Link from 'next/link';

type CardProps = {
    post: PostType
}

export function Card({post}: CardProps) {
    return <div className="group max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl">
        <div className="md:flex h-full">
            <div className="md:shrink-0 md:w-60 overflow-hidden">
                <Image
                    {...post.coverImage ?? {
                        src: "/user-placeholder.jpg",
                        height: 600,
                        width: 600,
                        alt: 'cover placeholder'
                    }}
                    className="h-full w-full object-cover md:h-full filter md:group-hover:scale-110 ease-in duration-400 transition-transform origin-center"
                />
            </div>
            <div className="p-4 flex flex-col gap-1 bg-background-card">
                <Link
                    href={`/blog/${post.slug}`}
                    className="text-ellipsis text-headline-card overflow-hiddenblock mt-1 text-xl leading-tight font-medium hover:underline"
                >
                    {post.title.slice(0, 30)}{post.title.length > 30 && '...'}
                </Link>
                <p className="mt-2 text-paragraph-card flex-grow">
                    {post.body.slice(0, 150)}{post.body.length > 150 && '...'}
                </p>
                <div className="flex text-paragraph-card gap-3 flex-wrap">
                    {post.tags.map(tag => <Link key={tag.id} href={`/blog/tag/${tag.slug}`}><Tag>{tag.label}</Tag></Link>)}
                </div>
            </div>
        </div>
    </div>;
}