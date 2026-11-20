import { Link } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
            {product.category}
          </span>
          <span className="text-xs text-stone-500">{product.stock} in stock</span>
        </div>

        <div>
          <h2 className="truncate text-lg font-semibold text-stone-900">
            {product.name}
          </h2>
          <p className="mt-1 text-lg font-bold text-stone-950">
            KSh {Number(product.price).toLocaleString()}
          </p>
        </div>

        <div className="flex items-center gap-2 border-t border-stone-100 pt-4">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 rounded-lg bg-stone-100 px-3 py-2.5 text-center text-sm font-semibold text-stone-800 transition hover:bg-stone-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
          >
            View / Edit
          </Link>

          <button
            type="button"
            className="rounded-lg px-3 py-2.5 text-sm font-semibold text-stone-500 transition hover:bg-rose-50 hover:text-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
