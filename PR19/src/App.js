import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

import {
  AppProvider,
} from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Header />

      <Navigation />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/add"
          element={<AddProduct />}
        />

        <Route
          path="/products/:id"
          element={
            <ProductDetails />
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </AppProvider>
  );
}

export default App;