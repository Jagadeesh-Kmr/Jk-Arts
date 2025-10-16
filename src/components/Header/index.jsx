import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa"; // Cart Icon
import useCart from "../../cart/useCart";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Custom Orders", path: "/cart" },
];

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const { cartList } = useCart() // <-- get cart data
  console.log(cartList)

  const toggleProfile = () => setShowProfile((prev) => !prev);
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo + Profile */}
          <div className="flex items-center space-x-2">
            <button onClick={toggleProfile}>
              <img
                src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1728112767/Jagadeesh_Image_j9mbse.jpg"
                alt="profile"
                className="md:w-20 md:h-20 w-12 h-12 rounded-full border-2 border-gray-400"
              />
            </button>
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1754980365/ChatGPT_Image_Aug_12_2025_11_58_24_AM_jh1izd.png"
                alt="JK arts"
                className="w-18 h-16 md:w-25 md:h-20 mt-2 cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex font-bold space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`hover:text-orange-600 transition ${
                    currentPath === link.path
                      ? "text-orange-600 font-bold"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* 🛒 Cart Link with count */}
            <li>
              <Link to="/cart" className="relative">
                <FaShoppingCart className="text-2xl text-gray-700 hover:text-orange-600" />
                {cartList.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartList.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-3xl text-gray-700 md:hidden"
          >
            {showMobileMenu ? <GiCancel /> : <IoMdMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <ul className="md:hidden bg-white shadow-lg border-t text-center animate-slide-down">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b">
                <Link
                  to={link.path}
                  className={`block py-3 ${
                    currentPath === link.path
                      ? "text-orange-600 font-bold"
                      : "text-gray-700"
                  }`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* 🛒 Cart for mobile */}
            <li className="border-b">
              <Link
                to="/cart"
                className="block py-3 text-gray-700 relative"
                onClick={() => setShowMobileMenu(false)}
              >
                <FaShoppingCart className="inline text-xl mr-2" />
                Cart
                {cartList.length > 0 && (
                  <span className="ml-2 bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartList.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* Profile Modal */}
      {showProfile && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 animate-fade-in">
          <div className="bg-blue-100 rounded-lg p-6 w-80 relative shadow-lg text-center">
            <GiCancel
              className="absolute top-3 right-3 text-2xl cursor-pointer text-gray-600"
              onClick={toggleProfile}
            />
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1728112767/Jagadeesh_Image_j9mbse.jpg"
              alt="profile"
              className="w-28 h-28 rounded-full mx-auto border-4 border-gray-400"
            />
            <h2 className="text-xl font-bold mt-4 text-orange-600">
              🎨 Jagadeesh Kumar
            </h2>
            <p className="text-gray-600">Artist ✍️</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
