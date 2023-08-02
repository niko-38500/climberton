export default function Post({params}: {params: {slug: string}}) {
    return <h1 className="text-xl text-headline-primary">{params.slug}</h1>
}