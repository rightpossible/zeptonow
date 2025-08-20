export default function AddressesPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900">Saved Addresses</h1>
        <button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border hover:bg-gray-50 bg-white text-gray-800">
          <span>＋</span>
          Add New Address
        </button>
      </div>

      <div className="bg-gray-50 border rounded-lg p-4">
        <div className="flex items-start justify-between bg-white border rounded-lg p-4">
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-1">Work</div>
            <div className="text-xs text-gray-600">Static, 1, West, SK, India</div>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <button className="hover:text-gray-700" title="Edit">✏️</button>
            <button className="hover:text-gray-700" title="Delete">🗑️</button>
          </div>
        </div>
      </div>
    </div>
  );
}


