import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import CartPage from './cart/CartPage';
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-100  text-center p-4 md:p-8 rounded-lg shadow-md">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/categories/:categoryName" element={<Gallery />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<h1 className="text-center p-10">404 - Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
