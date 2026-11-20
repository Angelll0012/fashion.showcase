import { useState } from "react";

const labelClassName = "mb-2 block text-sm font-semibold text-stone-700";
const fieldClassName =
  "w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-rose-400 focus:ring-4 focus:ring-rose-100";

function ProductForm({ initialValues, onSubmit, buttonText }) {
  const [formData, setFormData] = useState({
    name: initialValues?.name || "",
    description: initialValues?.description || "",
    price: initialValues?.price || "",
    category: initialValues?.category || "Women",
    stock: initialValues?.stock || "",
    image: initialValues?.image || ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock)
    });
  }

  return (
    <form
      className="grid gap-5 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:grid-cols-2 sm:gap-6 sm:p-8"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className={labelClassName}>Product Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          className={fieldClassName}
          required
        />
      </div>

      <div>
        <label htmlFor="category" className={labelClassName}>Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={fieldClassName}
        >
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Kids">Kids</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="description" className={labelClassName}>Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your product"
          className={`${fieldClassName} min-h-28 resize-y`}
          required
        />
      </div>

      <div>
        <label htmlFor="price" className={labelClassName}>Price (KSh)</label>
        <input
          id="price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="1"
          className={fieldClassName}
          required
        />
      </div>

      <div>
        <label htmlFor="stock" className={labelClassName}>Stock Quantity</label>
        <input
          id="stock"
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          min="0"
          className={fieldClassName}
          required
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="image" className={labelClassName}>Image URL</label>
        <input
          id="image"
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
          className={fieldClassName}
          required
        />
      </div>

      <button
        type="submit"
        className="rounded-xl bg-rose-700 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700 sm:col-span-2"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default ProductForm;
