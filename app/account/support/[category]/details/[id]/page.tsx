import Link from 'next/link';
import { getArticle } from '../../../data';

export default function SupportArticlePage({ params }: { params: { category: string; id: string } }) {
  const { category, article } = getArticle(params.category, params.id);

  if (!category || !article) {
    return <div className="text-sm text-gray-500">Article not found</div>;
  }

  return (
    <div className="mx-4 mt-4 sm:mt-6">
      <div className="flex items-center mb-4">
        <Link href={`/account/support/${category.slug}`} className="mr-3 hover:bg-gray-100 p-1 transition-colors duration-200">
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h4 className="font-heading text-lg tracking-wide line-clamp-2 !text-xl !font-semibold text-black">
          {category.title}
        </h4>
      </div>

      <div className="bg-white border border-gray-200 p-6">
        <h2 className="font-subtitle text-lg tracking-wider !font-medium text-black mb-4">{article.title}</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{article.body}</p>

        <div className="mt-6 p-4 bg-gray-50 border border-gray-200">
          <p className="text-xs text-gray-600 mb-3">Did this resolve your issue?</p>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 border border-gray-200 bg-white hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">👍</button>
            <button className="w-9 h-9 border border-gray-200 bg-white hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">👎</button>
          </div>
        </div>
      </div>
    </div>
  );
}


