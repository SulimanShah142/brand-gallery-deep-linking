"use client";

import { useEffect } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/brand-gallery-shopping/id6793068378";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.slliman.userapp";

const PACKAGE_NAME = "com.slliman.userapp";
const APP_SCHEME = "userapp";

export default function ProductBridge() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || "";
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /android/i.test(userAgent);

    if (!isAndroid && !isIOS) {
      return;
    }

    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const productIndex = pathParts.findIndex((part) => part.toLowerCase() === "product");
    const productId = productIndex !== -1 ? pathParts[productIndex + 1] : null;

    if (!productId) {
      return;
    }

    const encodedProductId = encodeURIComponent(productId);

    if (isAndroid) {
      const intentUrl =
        `intent://product/${encodedProductId}` +
        `#Intent;` +
        `scheme=${APP_SCHEME};` +
        `package=${PACKAGE_NAME};` +
        `S.browser_fallback_url=${encodeURIComponent(GOOGLE_PLAY_URL)};` +
        `end`;

      window.location.replace(intentUrl);
      return;
    }

    if (isIOS) {
      const nativeUrl = `${APP_SCHEME}://product/${encodedProductId}`;
      let appOpened = false;

      const handleVisibilityChange = () => {
        if (document.hidden) {
          appOpened = true;
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
      window.location.href = nativeUrl;

      const fallbackTimer = window.setTimeout(() => {
        if (appOpened || document.hidden) {
          return;
        }
        window.location.replace(APP_STORE_URL);
      }, 1200);

      return () => {
        window.clearTimeout(fallbackTimer);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">
        <div className="mx-auto mb-6 h-10 w-10 animate-spin rounded-full border-2 border-zinc-700 border-t-white" />
        <h1 className="text-xl font-semibold">Opening Brand Gallery</h1>
        <p className="mt-2 text-sm text-zinc-500">Opening the product...</p>
      </div>
    </main>
  );
}
