"use client";

import { useEffect } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/brand-gallery-shopping/id6793068378";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.slliman.userapp";

export default function ProductBridge() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    const isIOS =
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream;

    const isAndroid = /android/i.test(userAgent);

    if (isIOS) {
      window.location.replace(APP_STORE_URL);
      return;
    }

    if (isAndroid) {
      window.location.replace(GOOGLE_PLAY_URL);
      return;
    }
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">
        <div className="mx-auto mb-6 h-10 w-10 animate-spin rounded-full border-2 border-zinc-700 border-t-white" />

        <h1 className="text-xl font-semibold">
          Opening Brand Gallery
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Redirecting you to the Brand Gallery app.
        </p>
      </div>
    </main>
  );
}