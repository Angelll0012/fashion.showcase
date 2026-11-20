 import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

function AddProduct() {
  const navigate = useNavigate();

  async function handleAddProduct(product) {
    try {
      const response = await fetch(
        "/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(product)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      alert("Product added successfully!");

      navigate("/products");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-700">
          Inventory management
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
          Add New Product
        </h1>
        <p className="mt-2 text-stone-600">
          Fill in the details to add a product to your store.
        </p>
      </div>

      <ProductForm
        onSubmit={handleAddProduct}
        buttonText="Add Product"
      />
    </section>
  );
}

export default AddProduct;
