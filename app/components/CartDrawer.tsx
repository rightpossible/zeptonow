"use client";

import { useEffect, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CartDrawer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isOpen = (searchParams.get("cart") || "") === "open";

  const close = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("cart");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [searchParams, pathname, router]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
        onClick={close}
      />

      {/* Drawer */}
      <aside className="absolute right-0 top-0 h-full w-[420px] bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 h-14 px-4 border-b">
          <button
            onClick={close}
            className="p-1 rounded hover:bg-gray-100 text-gray-700"
            aria-label="Close cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="text-base font-semibold text-gray-900">Your Cart</div>
        </div>

        {/* Body - Empty State */}
        <div className="p-6 flex-1 overflow-auto bg-gray-50">
          <div className="bg-white border rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.69c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0019.33 5H6.21l-.94-2H1v2h2l3.6 7.59-1.35 2.45C4.52 16.37 5.48 18 7 18h12v-2H7l1.1-2z" />
              </svg>
            </div>
            <div className="text-sm text-gray-700 mb-4">Your cart is empty</div>
            <button
              onClick={close}
              className="h-10 px-4 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-black"
            >
              Browse Products
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}


