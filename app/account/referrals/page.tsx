export default function ReferralsPage() {
  return (
    <div className="space-y-4">
      {/* Promo banner */}
      <div className="rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-700 to-green-500 text-white px-5 py-4 rounded-t-lg text-sm font-semibold">
          25% off for you, Pass for them @ ₹1!
        </div>
        {/* How it works card */}
        <div className="border-x border-b rounded-b-lg">
          <div className="p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">How it works</h2>
            <ol className="space-y-2 text-xs text-gray-700 list-decimal ml-5">
              <li>
                Share the referral link with your friend
              </li>
              <li>
                After your friend places their first order, you get 25% off up to ₹200 on your next order
              </li>
              <li>
                Upon 10 successful referrals, you earn ₹2000
              </li>
            </ol>

            <div className="mt-4 space-y-3">
              <button className="w-full h-10 rounded-lg border flex items-center justify-center gap-2 text-sm font-medium bg-white hover:bg-gray-50 text-gray-800">
                <span>🟢</span>
                Invite via Whatsapp
              </button>
              <button className="w-full h-10 rounded-lg border flex items-center justify-center gap-2 text-sm font-medium bg-white hover:bg-gray-50 text-gray-800">
                <span>🔗</span>
                Share Invite Link
              </button>
            </div>
          </div>

          <div className="border-t px-5 py-6 text-center">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Your Referrals</h3>
            <p className="text-xs text-gray-600">No referrals yet. Share with friends to start saving!</p>
          </div>
        </div>
      </div>
    </div>
  );
}


