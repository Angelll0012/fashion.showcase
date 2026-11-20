import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-stone-50 text-stone-900">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </main>

        <footer className="border-t border-stone-200 bg-white px-4 py-6 text-center text-sm text-stone-500">
          <p>© 2026 StyleNest. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
