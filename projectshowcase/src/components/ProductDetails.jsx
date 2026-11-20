import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `/api/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const result = await response.json();
        setProduct(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  async function handleUpdate(updatedProduct) {
    try {
      const response = await fetch(
        `/api/products/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedProduct)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const result = await response.json();

      setProduct(result);

      alert("Product updated successfully!");

      navigate("/products");
    } catch (err) {
      alert(err.message);
    }
  }

  if (loading) {
    return (
      <p className="mx-auto my-12 max-w-3xl rounded-2xl border border-stone-200 bg-white p-8 text-center text-stone-600">
        Loading product...
      </p>
    );
  }

  if (error) {
    return (
      <p
        role="alert"
        className="mx-auto my-12 max-w-3xl rounded-2xl border border-rose-200 bg-rose-50 p-5 text-rose-800"
      >
        {error}
      </p>
    );
  }

  if (!product) return null;

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-700">
          Product management
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
          Edit Product
        </h1>
        <p className="mt-2 text-stone-600">
          Update product information, price and inventory.
        </p>
      </div>

      <ProductForm
        key={product.id}
        initialValues={product}
        onSubmit={handleUpdate}
        buttonText="Save Changes"
      />
    </section>
  );
}

export default ProductDetails;
