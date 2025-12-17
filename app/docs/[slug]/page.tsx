import { getDocContent } from '@/lib/content';

export default async function DocPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { slug } = params;
  const doc = await getDocContent(slug);

  return (
    <article className="max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{doc.title}</h1>
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: doc.content }}
      />
    </article>
  );
}