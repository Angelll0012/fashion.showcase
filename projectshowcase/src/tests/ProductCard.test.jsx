import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../components/ProductCard";

describe("ProductCard", () => {
  const product = {
    id: "1",
    name: "Denim Jacket",
    price: 3500,
    category: "Women",
    stock: 10,
    image: "https://example.com/jacket.jpg"
  };

  it("displays product information", () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} onDelete={vi.fn()} />
      </MemoryRouter>
    );

    expect(screen.getByText("Denim Jacket")).toBeInTheDocument();
    expect(screen.getByText("Women")).toBeInTheDocument();
    expect(screen.getByText("KSh 3,500")).toBeInTheDocument();
  });

  it("calls delete when the delete button is clicked", () => {
    const handleDelete = vi.fn();

    render(
      <MemoryRouter>
        <ProductCard product={product} onDelete={handleDelete} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Delete"));

    expect(handleDelete).toHaveBeenCalledWith("1");
  });
});
