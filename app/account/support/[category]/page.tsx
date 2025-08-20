import Link from 'next/link';
import { getCategory } from '../data';

export default function SupportCategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);

  if (!category) {
    return <div className="text-sm text-gray-500">Category not found</div>;
  }

  return (
    <>
      <div className="flex items-center mb-4">
        <Link href="/account/support" className="mr-3 hover:bg-gray-100 p-1 rounded transition-colors duration-200">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-lg font-semibold text-gray-900">{category.title}</h1>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden">
        {category.articles.map((a, idx) => (
          <Link
            key={a.id}
            href={`/account/support/${category.slug}/details/${a.id}`}
            className={`flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors duration-150 ${idx !== category.articles.length - 1 ? 'border-b' : ''}`}
          >
            <span className="text-sm text-gray-900">{a.title}</span>
            <svg className="w-4 h-4 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        ))}
      </div>
    </>
  );
}


