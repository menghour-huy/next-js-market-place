import Link from "next/link";

const featuredProducts = [
  {
    name: "Aurora Lamp",
    category: "Home Decor",
    price: "$89",
    accent: "from-amber-300 via-orange-200 to-rose-200",
  },
  {
    name: "Pulse Headphones",
    category: "Electronics",
    price: "$149",
    accent: "from-cyan-300 via-sky-200 to-blue-100",
  },
  {
    name: "Summit Backpack",
    category: "Travel",
    price: "$119",
    accent: "from-emerald-300 via-lime-200 to-teal-100",
  },
];

const categories = [
  "Electronics",
  "Fashion",
  "Home",
  "Beauty",
  "Sports",
  "Collectibles",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-slate-900">
      <header className="mx-auto max-w-7xl px-6 pb-12 pt-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-lg font-bold text-white">
              M
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">MarketHub</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#categories" className="transition hover:text-slate-900">Categories</a>
            <a href="#featured" className="transition hover:text-slate-900">Featured</a>
            <a href="#deals" className="transition hover:text-slate-900">Deals</a>
            <a href="#sell" className="transition hover:text-slate-900">Sell</a>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-slate-300 md:inline-flex">
              Sign in
            </Link>
            <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
              Join now
            </button>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-flex w-fit rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
            Fresh finds weekly
          </span>
          <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
            Shop smarter for your next favorite thing.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Discover curated essentials, trending gadgets, and handcrafted pieces from independent sellers around the world.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Explore products
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
              Start selling
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-600">
            <div>
              <p className="text-2xl font-black text-slate-900">12k+</p>
              <span>Curated products</span>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">4.9/5</p>
              <span>Seller rating</span>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">24h</p>
              <span>Quick shipping</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-orange-200 blur-3xl" />
          <div className="absolute -bottom-6 right-8 h-40 w-40 rounded-full bg-rose-200 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-100 via-white to-orange-50 p-4">
              <div className="flex items-center justify-between pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Trending now</p>
                  <h2 className="mt-2 text-2xl font-bold">Weekend drop</h2>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  32% off
                </span>
              </div>

              <div className="h-72 rounded-[1.5rem] bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-50 p-6">
                <div className="flex h-full items-end justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-700">New arrival</p>
                    <p className="mt-2 text-3xl font-black text-slate-900">Vela Pro</p>
                  </div>
                  <div className="rounded-full bg-white/80 px-3 py-2 text-lg font-bold text-slate-900 shadow-sm">
                    $210
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm text-slate-600">
                <div className="rounded-2xl bg-slate-100 p-3">
                  <p className="text-lg font-bold text-slate-900">4.8</p>
                  <span>Reviews</span>
                </div>
                <div className="rounded-2xl bg-slate-100 p-3">
                  <p className="text-lg font-bold text-slate-900">1.2k</p>
                  <span>Sold</span>
                </div>
                <div className="rounded-2xl bg-slate-100 p-3">
                  <p className="text-lg font-bold text-slate-900">2d</p>
                  <span>Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="mb-7 flex items-center justify-between">
          <h3 className="text-2xl font-bold tracking-tight">Browse categories</h3>
          <a href="#" className="text-sm font-semibold text-slate-700 hover:text-slate-900">View all</a>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-7 flex items-center justify-between">
          <h3 className="text-2xl font-bold tracking-tight">Featured products</h3>
          <a href="#" className="text-sm font-semibold text-slate-700 hover:text-slate-900">See more</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <div className={`h-52 bg-gradient-to-br ${product.accent} p-4`}>
                <div className="flex h-full items-start justify-between">
                  <span className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-slate-700 backdrop-blur-sm">
                    {product.category}
                  </span>
                  <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">
                    New
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-xl font-bold">{product.name}</h4>
                    <p className="mt-1 text-sm text-slate-500">Top rated seller</p>
                  </div>
                  <span className="text-lg font-bold text-slate-900">{product.price}</span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-slate-300">★</span>
                  </div>
                  <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="deals" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Flash deals</p>
            <h3 className="text-4xl font-black tracking-tight">Big savings this week.</h3>
            <p className="mt-4 max-w-md text-slate-300">
              Score premium essentials at limited-time prices from trusted stores and local makers.
            </p>
            <button className="mt-8 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Shop today
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Wireless earbuds", "$79", "Save 45%"],
              ["Smart watch", "$129", "Save 28%"],
              ["Desk lamp", "$49", "Save 35%"],
              ["Travel kit", "$64", "Save 22%"],
            ].map(([name, price, badge]) => (
              <div key={name} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="mb-6 h-28 rounded-[1rem] bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900" />
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-bold">{name}</p>
                    <p className="mt-1 text-sm text-slate-300">{badge}</p>
                  </div>
                  <span className="text-lg font-bold text-orange-300">{price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sell" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Sell with us</p>
              <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Turn your products into a thriving store.</h3>
              <p className="mt-4 max-w-lg text-slate-600">
                Launch your own storefront, reach buyers worldwide, and keep more of your sales with simple tools built for growth.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-[1.5rem] bg-slate-50 p-5">
              <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                <div>
                  <p className="text-sm text-slate-500">Monthly sales</p>
                  <p className="mt-1 text-2xl font-black text-slate-900">$14.8k</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  +18.4%
                </span>
              </div>
              <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 p-4 text-white">
                <p className="text-sm text-orange-100">Seller growth</p>
                <p className="mt-2 text-3xl font-black">2.4x</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
