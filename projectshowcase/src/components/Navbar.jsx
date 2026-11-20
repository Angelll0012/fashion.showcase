import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-xl font-black tracking-tight text-stone-950 sm:text-2xl"
        >
          StyleNest<span className="text-rose-600">.</span>
        </Link>

        <div className="flex items-center gap-3 text-sm font-medium sm:gap-7">
          <Link
            to="/"
            className="hidden text-stone-600 transition hover:text-rose-700 sm:inline"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-stone-600 transition hover:text-rose-700"
          >
            Products
          </Link>
          <Link
            to="/add-product"
            className="rounded-full bg-stone-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700 sm:px-5 sm:text-sm"
          >
            <span className="sm:hidden">Add</span>
            <span className="hidden sm:inline">+ Add Product</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
