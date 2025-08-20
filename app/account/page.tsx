import Link from 'next/link';

export default function AccountSettingsPage() {
  return (
    <>
      <div className="flex items-center mb-4">
        <Link href="/" className="mr-3 hover:bg-gray-100 p-1 rounded transition-colors duration-200">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-lg font-semibold text-gray-900">Settings</h1>
      </div>

      <div className="bg-gray-50 border rounded-lg p-10 text-center">
        <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center relative">
            <span className="text-white text-xl">Z</span>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">0</span>
            </div>
          </div>
        </div>
        <h2 className="text-base font-semibold text-gray-900 mb-4">No orders yet</h2>
        <button className="bg-white border-2 border-purple-600 text-purple-600 px-5 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200 mb-3">
          Browse products
        </button>
        <div>
          <button className="text-pink-500 border border-pink-500 px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-50 transition-colors duration-200">
            ↓ Load More
          </button>
        </div>
      </div>
    </>
  );
}
