export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-gray-900">Profile</h1>
      <div className="bg-white border rounded-lg p-4 space-y-4">
        <div>
          <label className="block text-xs text-gray-600 mb-1">Name *</label>
          <input className="w-full h-10 border rounded-md px-3 text-sm" defaultValue="Kashyap" />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">Email Address *</label>
          <input className="w-full h-10 border rounded-md px-3 text-sm" placeholder="-" />
          <p className="text-[11px] text-gray-500 mt-2">We promise not to spam you</p>
        </div>
        <div className="pt-2">
          <button className="px-5 py-2 rounded-md bg-pink-600 text-white text-sm font-semibold hover:bg-pink-700">Submit</button>
        </div>
      </div>

      <div className="border-t pt-4">
        <h2 className="text-sm font-semibold text-gray-900 mb-2">Delete Account</h2>
        <p className="text-xs text-gray-600 mb-3">Deleting your account will remove all your orders, wallet amount and any active referral</p>
        <button className="px-5 py-2 rounded-md border text-sm hover:bg-gray-50 bg-white text-gray-800">Delete</button>
      </div>
    </div>
  );
}


