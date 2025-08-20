import Link from 'next/link';
import { getArticle } from '../../../data';

export default function SupportArticlePage({ params }: { params: { category: string; id: string } }) {
  const { category, article } = getArticle(params.category, params.id);

  if (!category || !article) {
    return <div className="text-sm text-gray-500">Article not found</div>;
  }

  return (
    <>
      <div className="flex items-center mb-4">
        <Link href={`/account/support/${category.slug}`} className="mr-3 hover:bg-gray-100 p-1 rounded transition-colors duration-200">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-lg font-semibold text-gray-900">{category.title}</h1>
      </div>

      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-sm font-semibold text-gray-900 mb-3">{article.title}</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{article.body}</p>

        <div className="mt-6 p-4 bg-gray-50 border rounded">
          <p className="text-xs text-gray-600 mb-2">Did this resolve your issue?</p>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full border bg-white hover:bg-gray-100">👍</button>
            <button className="w-9 h-9 rounded-full border bg-white hover:bg-gray-100">👎</button>
          </div>
        </div>
      </div>
    </>
  );
}


