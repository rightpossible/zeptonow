export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-gray-900">Profile</h1>
      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-5">
        <div>
          <label className="block text-xs text-gray-600 mb-2">Name *</label>
          <input className="w-full text-black h-11 border border-gray-200 rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" defaultValue="Kashyap" />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-2">Email Address *</label>
          <input className="w-full h-11 border border-gray-200 rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="-" />
          <p className="text-[11px] text-gray-500 mt-2">We promise not to spam you</p>
        </div>
        <div className="pt-2">
          <button className="px-5 py-2 rounded-md bg-pink-600 text-white text-sm font-semibold hover:bg-pink-700">Submit</button>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h2 className="text-sm font-semibold text-gray-900 mb-3">Delete Account</h2>
        <p className="text-xs text-gray-600 mb-4">Deleting your account will remove all your orders, wallet amount and any active referral</p>
        <button className="px-5 py-2 rounded-md border border-gray-200 text-sm hover:bg-gray-50 bg-white text-gray-800 transition-colors">Delete</button>
      </div>
    </div>
  );
}


