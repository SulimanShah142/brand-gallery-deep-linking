
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
      navigator.userAgent ||
      navigator.vendor ||
      "";

    const isIOS =
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream;

    const isAndroid =
      /android/i.test(userAgent);

    // ---------------------------------------------------------
    // Only handle mobile devices.
    // ---------------------------------------------------------

    if (!isIOS && !isAndroid) {
      return;
    }

    // ---------------------------------------------------------
    // Extract:
    //
    // /product/<id>
    //
    // ---------------------------------------------------------

    const pathParts =
      window.location.pathname
        .split("/")
        .filter(Boolean);

    const productIndex =
      pathParts.findIndex(
        (part) =>
          part.toLowerCase() === "product"
      );

    const productId =
      productIndex !== -1
        ? pathParts[productIndex + 1]
        : null;

    if (!productId) {
      return;
    }

    // ---------------------------------------------------------
    // Native application URL
    //
    // userapp://product/<id>
    // ---------------------------------------------------------

    const nativeUrl =
      `${APP_SCHEME}://product/${encodeURIComponent(
        productId
      )}`;

    let appOpened = false;

    // ---------------------------------------------------------
    // If the browser becomes hidden, the OS has most likely
    // handed control to the native application.
    // ---------------------------------------------------------

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
    // Try opening the native app IMMEDIATELY.
    // ---------------------------------------------------------

    window.location.href = nativeUrl;

    // ---------------------------------------------------------
    // Very short fallback.
    //
    // If the app exists:
    //   Browser becomes hidden → no store redirect.
    //
    // If the app doesn't exist:
    //   Browser remains visible → store opens.
    // ---------------------------------------------------------

    const fallbackTimer =
      window.setTimeout(() => {
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
      }, 800);

    // ---------------------------------------------------------
    // Cleanup
    // ---------------------------------------------------------

    return () => {
      window.clearTimeout(
        fallbackTimer
      );

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
          Opening the product...
        </p>
      </div>
    </main>
  );
}

