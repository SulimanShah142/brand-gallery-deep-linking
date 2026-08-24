
import Link from "next/link";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.slliman.userapp";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/brand-gallery-shopping/id6793068378";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafafa] text-zinc-950">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-xs font-bold text-white transition-transform duration-300 group-hover:scale-105">
              BG
            </div>

            <span className="text-sm font-bold tracking-[0.18em]">
              BRAND GALLERY
            </span>
          </Link>

          <a
            href="#download"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-lg"
          >
            Get the App
          </a>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex min-h-screen items-center px-6 pb-20 pt-32">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-zinc-200/50 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-zinc-100 blur-3xl" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Hero copy */}
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              Brand Gallery Shopping
            </div>

            <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Discover
              <br />
              something
              <br />
              <span className="text-zinc-400">beautiful.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
              Explore products, discover colors and sizes, and enjoy the
              complete Brand Gallery shopping experience from your phone.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-black px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800 hover:shadow-2xl"
              >
                <span className="flex items-center gap-3">
                  Download for Android
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-200 bg-white px-7 py-4 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
              >
                Download for iPhone
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-zinc-400">
              <span>Available on Android</span>
              <span className="h-1 w-1 rounded-full bg-zinc-300" />
              <span>Available on iOS</span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-100 shadow-2xl shadow-black/10">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-100 to-zinc-200" />

              {/* Decorative cards */}
              <div className="absolute left-8 top-8 rounded-2xl border border-white/80 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Brand Gallery
                </p>
                <p className="mt-1 text-sm font-semibold">
                  New collection
                </p>
              </div>

              <div className="absolute bottom-8 right-8 rounded-2xl border border-white/80 bg-black px-5 py-4 text-white shadow-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Shopping
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Made simple.
                </p>
              </div>

              <div className="absolute inset-x-12 bottom-20 top-24 rounded-[2rem] border border-white bg-white/60 shadow-2xl backdrop-blur-xl">
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.15em]">
                      BRAND GALLERY
                    </span>

                    <span className="h-8 w-8 rounded-full bg-zinc-100" />
                  </div>

                  <div className="mt-8 flex-1 rounded-3xl bg-gradient-to-br from-zinc-200 via-zinc-100 to-white" />

                  <div className="mt-5">
                    <div className="h-3 w-32 rounded-full bg-zinc-200" />
                    <div className="mt-3 h-2.5 w-20 rounded-full bg-zinc-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="border-t border-zinc-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              The experience
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need
              <br />
              to shop better.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Detailed products",
                text: "Explore product information, descriptions, images, colors and available sizes.",
              },
              {
                number: "02",
                title: "Easy selection",
                text: "Choose the exact color and size you want before adding an item to your cart.",
              },
              {
                number: "03",
                title: "Complete shopping",
                text: "Continue directly inside the Brand Gallery mobile application.",
              },
            ].map((feature) => (
              <div
                key={feature.number}
                className="group bg-white p-8 transition-colors duration-300 hover:bg-zinc-50 sm:p-10"
              >
                <span className="text-xs font-semibold text-zinc-400">
                  {feature.number}
                </span>

                <h3 className="mt-14 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-500">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APP CTA
      ========================================================= */}
      <section
        id="download"
        className="px-6 py-28"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-black px-8 py-16 text-white sm:px-14 sm:py-20"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Brand Gallery App
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Your next favorite
              <br />
              product is waiting.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Download Brand Gallery and take the complete shopping
              experience with you.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200"
              >
                Google Play
              </a>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900"
              >
                App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-zinc-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold tracking-[0.12em] text-zinc-700">
            BRAND GALLERY
          </span>

          <span>
            © {new Date().getFullYear()} Brand Gallery. All rights
            reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
