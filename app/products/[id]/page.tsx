"use client";

import { useEffect } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/brand-gallery-shopping/id6793068378";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.slliman.userapp";

const APP_SCHEME = "userapp";

export default function ProductBridge() {
  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || "";

    const isIOS =
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream;

    const isAndroid = /android/i.test(userAgent);

    // ---------------------------------------------------------
    // GET PRODUCT ID FROM:
    //
    // https://brand-gallery-deep-linking.vercel.app/product/UUID
    //
    // ---------------------------------------------------------

    const pathParts = window.location.pathname
      .split("/")
      .filter(Boolean);

    const productIndex =
      pathParts.findIndex(
        (part) => part.toLowerCase() === "product"
      );

    const productId =
      productIndex !== -1
        ? pathParts[productIndex + 1]
        : null;

    // ---------------------------------------------------------
    // If there is no product ID, don't attempt a deep link.
    // ---------------------------------------------------------

    if (!productId) {
      return;
    }

    // ---------------------------------------------------------
    // Native deep-link URL
    //
    // This should resolve to:
    //
    // userapp://product/3a755b24-2c17-414c-a429-7f4c4b92102c
    //
    // Expo Router should then open:
    //
    // app/(shop)/product/[id].tsx
    //
    // ---------------------------------------------------------

    const nativeUrl =
      `${APP_SCHEME}://product/${encodeURIComponent(
        productId
      )}`;

    let appOpened = false;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        appOpened = true;
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    // ---------------------------------------------------------
    // Attempt to open the native application.
    // ---------------------------------------------------------

    if (isAndroid || isIOS) {
      window.location.href = nativeUrl;

      // -------------------------------------------------------
      // Fallback to the store only if the app did not open.
      //
      // The timeout gives the OS time to launch the app.
      // -------------------------------------------------------

      const fallbackTimer = window.setTimeout(() => {
        if (appOpened || document.hidden) {
          return;
        }

        if (isAndroid) {
          window.location.replace(
            GOOGLE_PLAY_URL
          );
          return;
        }

        if (isIOS) {
          window.location.replace(
            APP_STORE_URL
          );
        }
      }, 1800);

      return () => {
        window.clearTimeout(fallbackTimer);

        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      };
    }

    // ---------------------------------------------------------
    // Desktop:
    // Don't redirect to either mobile store.
    // ---------------------------------------------------------

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">
        <div className="mx-auto mb-6 h-10 w-10 animate-spin rounded-full border-2 border-zinc-700 border-t-white" />

        <h1 className="text-xl font-semibold">
          Opening Brand Gallery
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Opening the product in the Brand Gallery app...
        </p>
      </div>
    </main>
  );
}

