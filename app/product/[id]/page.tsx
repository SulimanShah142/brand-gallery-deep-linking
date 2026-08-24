import Link from "next/link";

type ProductColor = {
  id?: string;
  name?: string;
  namePs?: string;
  nameFa?: string;
  colorCode?: string;
  imageUrl?: string | null;
  sortOrder?: number;
};

type SizeGuideRow = {
  id?: string;
  size?: string;
  measurements?: Record<string, string>;
  sortOrder?: number;
};

type SpecificationTable = {
  id?: string;
  title?: string;
  titlePs?: string;
  titleFa?: string;
  rows?: SizeGuideRow[];
};

type Product = {
  id: string;

  name?: string;
  namePs?: string;
  nameFa?: string;

  description?: string;
  descriptionPs?: string;
  descriptionFa?: string;

  usdPrice?: number | string;
  profitPercentage?: number | string;

  imageUrl?: string | null;

  colors?: ProductColor[];

  availableSizes?: string[];

  specificationTables?: SpecificationTable[];

  sizeGuide?: SpecificationTable | null;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/products/${encodeURIComponent(id)}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fafafa] px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-2xl">
            ×
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            Product unavailable
          </h1>

          <p className="mt-3 leading-7 text-zinc-500">
            This product may have been removed or is no longer
            available.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Back to Brand Gallery
          </Link>
        </div>
      </main>
    );
  }

  const colors = Array.isArray(product.colors)
    ? product.colors
    : [];

  const sizes = Array.isArray(product.availableSizes)
    ? product.availableSizes
    : [];

  const description =
    product.description?.trim() ||
    "No description available.";

  const specifications =
    product.sizeGuide ||
    product.specificationTables?.find(
      (table) =>
        table.title === "Product Details" ||
        table.title === "Size Guide"
    ) ||
    null;

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-950">

      {/* ===================================================== */}
      {/* TOP ANNOUNCEMENT */}
      {/* ===================================================== */}

      <div className="bg-black px-4 py-2.5 text-center text-xs font-medium tracking-wide text-white">
        Discover more products and shop directly in the Brand
        Gallery app.
      </div>

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

          <Link
            href="/"
            className="text-lg font-bold tracking-[0.12em] sm:text-xl"
          >
            BRAND GALLERY
          </Link>

          <div className="flex items-center gap-3">

            <span className="hidden text-xs font-medium text-zinc-400 sm:block">
              MOBILE SHOPPING EXPERIENCE
            </span>

            <a
              href="#download"
              className="rounded-full bg-black px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-zinc-800"
            >
              GET THE APP
            </a>

          </div>
        </div>
      </header>

      {/* ===================================================== */}
      {/* BREADCRUMB */}
      {/* ===================================================== */}

      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Link
            href="/"
            className="transition hover:text-black"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-zinc-600">
            {product.name || "Product"}
          </span>
        </div>
      </div>

      {/* ===================================================== */}
      {/* PRODUCT AREA */}
      {/* ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">

        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">

          {/* ================================================= */}
          {/* PRODUCT IMAGE */}
          {/* ================================================= */}

          <div>

            <div className="relative overflow-hidden rounded-2xl bg-white">

              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name || "Product"}
                  className="aspect-[4/5] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/5] items-center justify-center text-sm text-zinc-400">
                  No image available
                </div>
              )}

              {/* IMAGE BADGE */}

              <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] shadow-sm">
                Brand Gallery
              </div>

            </div>

            {/* ================================================= */}
            {/* COLOR IMAGE STRIP */}
            {/* ================================================= */}

            {colors.length > 0 && (
              <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">

                {colors.map((color, index) => (
                  <div
                    key={
                      color.id ||
                      `${color.name}-${index}`
                    }
                    className="overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200"
                  >
                    {color.imageUrl ? (
                      <img
                        src={color.imageUrl}
                        alt={color.name || "Color"}
                        className="aspect-square w-full object-cover"
                      />
                    ) : (
                      <div
                        className="aspect-square"
                        style={{
                          backgroundColor:
                            color.colorCode ||
                            "#e5e5e5",
                        }}
                      />
                    )}
                  </div>
                ))}

              </div>
            )}

          </div>

          {/* ================================================= */}
          {/* PRODUCT INFORMATION */}
          {/* ================================================= */}

          <div className="flex flex-col">

            {/* BRAND */}

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">
              Brand Gallery Collection
            </p>

            {/* NAME */}

            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {product.name || "Product"}
            </h1>

            {/* PRICE */}

            {product.usdPrice != null && (
              <div className="mt-6 flex items-end gap-3">

                <span className="text-2xl font-semibold tracking-tight">
                  ${Number(product.usdPrice).toFixed(2)}
                </span>

                <span className="pb-0.5 text-xs text-zinc-400">
                  USD
                </span>

              </div>
            )}

            {/* DIVIDER */}

            <div className="my-7 h-px bg-zinc-200" />

            {/* ================================================= */}
            {/* DESCRIPTION */}
            {/* ================================================= */}

            <section>

              <h2 className="text-xs font-bold uppercase tracking-[0.15em]">
                Product Details
              </h2>

              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-zinc-600">
                {description}
              </p>

            </section>

            {/* ================================================= */}
            {/* COLORS */}
            {/* ================================================= */}

            {colors.length > 0 && (
              <section className="mt-8">

                <div className="flex items-center justify-between">

                  <h2 className="text-xs font-bold uppercase tracking-[0.15em]">
                    Color
                  </h2>

                  <span className="text-xs text-zinc-400">
                    {colors.length}{" "}
                    {colors.length === 1
                      ? "option"
                      : "options"}
                  </span>

                </div>

                <div className="mt-4 flex flex-wrap gap-3">

                  {colors.map((color, index) => (
                    <div
                      key={
                        color.id ||
                        `${color.name}-${index}`
                      }
                      className="group"
                    >

                      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white transition group-hover:border-black">

                        {color.imageUrl ? (
                          <img
                            src={color.imageUrl}
                            alt={
                              color.name ||
                              "Color"
                            }
                            className="h-16 w-16 object-cover"
                          />
                        ) : (
                          <div
                            className="h-16 w-16"
                            style={{
                              backgroundColor:
                                color.colorCode ||
                                "#e5e5e5",
                            }}
                          />
                        )}

                      </div>

                      <p className="mt-2 max-w-[64px] truncate text-center text-[10px] font-medium text-zinc-600">
                        {color.name ||
                          "Color"}
                      </p>

                    </div>
                  ))}

                </div>

              </section>
            )}

            {/* ================================================= */}
            {/* SIZES */}
            {/* ================================================= */}

            {sizes.length > 0 && (
              <section className="mt-8">

                <div className="flex items-center justify-between">

                  <h2 className="text-xs font-bold uppercase tracking-[0.15em]">
                    Size
                  </h2>

                  {specifications && (
                    <span className="text-xs text-zinc-400">
                      Size guide available
                    </span>
                  )}

                </div>

                <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-5">

                  {sizes.map((size) => (
                    <div
                      key={size}
                      className="flex h-11 items-center justify-center rounded-lg border border-zinc-200 bg-white text-sm font-medium"
                    >
                      {size}
                    </div>
                  ))}

                </div>

              </section>
            )}

            {/* ================================================= */}
            {/* SIZE GUIDE */}
            {/* ================================================= */}

            {specifications &&
              Array.isArray(
                specifications.rows
              ) &&
              specifications.rows.length > 0 && (
                <section className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white">

                  <div className="border-b border-zinc-100 px-5 py-4">

                    <h2 className="text-xs font-bold uppercase tracking-[0.15em]">
                      Size Guide
                    </h2>

                  </div>

                  <div className="overflow-x-auto">

                    <table className="w-full min-w-[400px] text-left text-xs">

                      <thead className="bg-zinc-50">
                        <tr>

                          <th className="px-5 py-3 font-semibold">
                            Size
                          </th>

                          {Object.keys(
                            specifications.rows[0]
                              .measurements || {}
                          ).map((key) => (
                            <th
                              key={key}
                              className="px-5 py-3 font-semibold capitalize"
                            >
                              {key.replace(
                                /_/g,
                                " "
                              )}
                            </th>
                          ))}

                        </tr>
                      </thead>

                      <tbody>

                        {specifications.rows.map(
                          (row, index) => (
                            <tr
                              key={
                                row.id ||
                                `${row.size}-${index}`
                              }
                              className="border-t border-zinc-100"
                            >

                              <td className="px-5 py-3 font-semibold">
                                {row.size}
                              </td>

                              {Object.keys(
                                specifications
                                  .rows?.[0]
                                  ?.measurements ||
                                  {}
                              ).map((key) => (
                                <td
                                  key={key}
                                  className="px-5 py-3 text-zinc-500"
                                >
                                  {
                                    row.measurements?.[
                                      key
                                    ]
                                  }
                                </td>
                              ))}

                            </tr>
                          )
                        )}

                      </tbody>

                    </table>

                  </div>

                </section>
              )}

            {/* ================================================= */}
            {/* APP CTA */}
            {/* ================================================= */}

            <div
              id="download"
              className="mt-10 rounded-2xl bg-black p-6 text-white sm:p-7"
            >

              <div className="flex items-start justify-between gap-5">

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Brand Gallery App
                  </p>

                  <h2 className="mt-2 text-xl font-semibold tracking-tight">
                    Shop this product in the app.
                  </h2>

                  <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400">
                    Get the complete experience with product
                    selection, checkout, orders and more.
                  </p>

                </div>

                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black sm:flex">
                  →
                </div>

              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#"
                  className="flex flex-1 items-center justify-center rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                >
                  Open in App
                </a>

                <a
                  href="#"
                  className="flex flex-1 items-center justify-center rounded-full border border-zinc-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-900"
                >
                  Install App
                </a>

              </div>

            </div>

            {/* ================================================= */}
            {/* TRUST INFORMATION */}
            {/* ================================================= */}

            <div className="mt-7 grid grid-cols-3 border-y border-zinc-200 py-5">

              <div className="pr-4">

                <p className="text-xs font-semibold">
                  Secure
                </p>

                <p className="mt-1 text-[10px] leading-4 text-zinc-400">
                  Protected shopping experience
                </p>

              </div>

              <div className="border-l border-zinc-200 px-4">

                <p className="text-xs font-semibold">
                  Delivery
                </p>

                <p className="mt-1 text-[10px] leading-4 text-zinc-400">
                  Order directly through the app
                </p>

              </div>

              <div className="border-l border-zinc-200 pl-4">

                <p className="text-xs font-semibold">
                  Support
                </p>

                <p className="mt-1 text-[10px] leading-4 text-zinc-400">
                  Brand Gallery customer support
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <footer className="border-t border-zinc-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">

          <span>
            © {new Date().getFullYear()} Brand Gallery
          </span>

          <span>
            Shop smarter. Shop with Brand Gallery.
          </span>

        </div>

      </footer>

    </main>
  );
}