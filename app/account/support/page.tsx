import Link from 'next/link';
import { supportCategories } from './data';

export default function SupportPage() {
  return (
    <div className="mx-4 mt-4 sm:mt-6">
      <h4 className="font-heading text-lg tracking-wide line-clamp-2 mb-1 w-2/3 !text-xl !font-bold sm:mb-4 text-black">
        FAQs
      </h4>
      
      <ul>
        {supportCategories.map((cat, idx) => (
          <li key={cat.slug}>
            <Link
              href={`/account/support/${cat.slug}`}
              className="list-item-arrow flex !w-full cursor-pointer items-center justify-between py-4 after:ml-[10px] after:inline-block after:h-7"
            >
              <h5 className="block font-subtitle text-lg tracking-wider !font-medium text-black">
                {cat.title}
              </h5>
            </Link>
            {idx !== supportCategories.length - 1 && (
              <div className="w-full rounded-full border-[0.5px] border-gray-200"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


