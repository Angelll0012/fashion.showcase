import { useState } from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

function Products() {
  const { data: products, loading, error, setData } =
    useFetch("/api/products");

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `/api/products/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Could not delete product");
      }

      setData((previousProducts) =>
        previousProducts.filter((product) => product.id !== id)
      );
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-700">
            Your inventory
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
            All Products
          </h1>
          <p className="mt-2 text-stone-600">
            Manage your fashion collection.
          </p>
        </div>
        <label className="relative block w-full sm:max-w-sm">
          <span className="sr-only">Search products</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            className="w-full rounded-xl border border-stone-200 bg-white py-3 pl-11 pr-4 text-sm text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {loading && (
        <p className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-stone-600">
          Loading products...
        </p>
      )}
      {error && (
        <p
          role="alert"
          className="rounded-2xl border border-rose-200 bg-rose-50 p-5 text-rose-800"
        >
          {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-stone-600">
              Showing{" "}
              <span className="font-semibold text-stone-900">
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <p className="col-span-full rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-14 text-center text-stone-500">
                No products found. Try a different search.
              </p>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default Products;
