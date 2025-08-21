import Link from 'next/link';
import { getCategory } from '../data';

export default function SupportCategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);

  if (!category) {
    return <div className="text-sm text-gray-500">Category not found</div>;
  }

  return (
    <div className="mx-4 mt-4 sm:mt-6">
      <div className="flex items-center mb-4">
        <Link href="/account/support" className="mr-3 hover:bg-gray-100 p-1 transition-colors duration-200">
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h4 className="font-heading text-lg tracking-wide line-clamp-2 !text-xl !font-semibold text-black">
          {category.title}
        </h4>
      </div>

      <ul>
        {category.articles.map((a, idx) => (
          <li key={a.id}>
            <Link
              href={`/account/support/${category.slug}/details/${a.id}`}
              className="list-item-arrow flex !w-full cursor-pointer items-center justify-between py-4 after:ml-[10px] after:inline-block after:h-7"
            >
              <h5 className="block font-subtitle text-lg tracking-wider !font-medium text-black">
                {a.title}
              </h5>
            </Link>
            {idx !== category.articles.length - 1 && (
              <div className="w-full border-[0.5px] border-gray-200"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


