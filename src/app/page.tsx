import {PostType} from '@/shared/type/post.type';
import getUser from '@/shared/security/getUser';

async function getPosts(): Promise<PostType[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4', {
    next: {
      revalidate: 5
    },
  });

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();
  posts.forEach((post, i) => {
    post.tags = [
      {label: 'Voyage', slug: 'voyage', id: 1},
      {label: 'Vacance', slug: 'vacance', id: 2},
      {label: 'Lifestyle', slug: 'lifestyle', id: 3},
    ];

    post.coverImage = {
      alt: '',
      src: 'https://jooinn.com/images/mountain-range-111.jpg',
      width: 4922,
      height: 3285
    };

    post.slug = post.title.replaceAll(' ', '-');
  })
  const user = await getUser();
  console.log(user)


  return <>
    <h1 className="text-xl font-bold text-h-primary w-full">Bienvenue dans l'espace blog</h1>

    <p className="text-p-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis distinctio dolorum ea esse excepturi impedit nemo officia, quasi ullam voluptas! Cumque distinctio iusto nemo, nihil placeat possimus quisquam quod vel.</p>
  </>
}