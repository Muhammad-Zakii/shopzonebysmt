import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import CategoryProductPage from "./pages/CategoryProductPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/product/category/:category" element={<CategoryProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
