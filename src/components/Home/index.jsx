import React from "react";
import Header from "../Header";

import { Link } from "react-router-dom";

const Home = () => {
 // Home.jsx (categories)
const categories = [
  {
    name: "Lord Ganesha",
    path: "/categories/ganesha",
    img: "https://i.pinimg.com/originals/a9/70/14/a97014023e454fdd2c147f00884c2e58.jpg"
  },
  {
    name: "Lord Krishna",
    path: "/categories/krishna",
    img: 
    "https://nichecanvas.com/cdn/shop/files/1-piece_floating-frame_1_32abce02-9cbc-479f-a1ab-f32b1148b7a0_512x512.jpg?v=1724571202"  },
  {
    name: "Goddess Lakshmi",
    path: "/categories/lakshmi",
    img: 
    "https://images.saatchiart.com/saatchi/1340813/art/9858755/8921701-QOTAHKDE-6.jpg" 
   },
  {
    name: "Lord Shiva",
    path: "/categories/shiva",
    img: 
    "https://i.etsystatic.com/47044949/c/2005/2005/0/102/il/a1d6af/5861363409/il_600x600.5861363409_hzrl.jpg" 
   },
  {
    name: "Ram & Hanuman",
    path: "/categories/ram-hanuman",
    img: 
    "https://t3.ftcdn.net/jpg/15/63/73/34/360_F_1563733439_tnOeRmhJ0Ya40tEGwSCaXJCLxEsEJamH.jpg"
  },
];


  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-orange-50 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-extrabold tracking-widest text-2xl md:text-4xl">
              JKARTS
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Explore divine paintings of Hindu Gods, crafted with love and
            devotion. Perfect for your home, temple, or as a special gift.
          </p>
          <div className="flex justify-center space-x-3">
            <a
              href="/gallery"
              className="bg-orange-600 hover:bg-orange-700 text-white 
               px-4 py-2 text-sm 
               md:px-6 md:py-3 md:text-base 
               rounded-lg shadow-lg transition duration-300"
            >
              View Gallery
            </a>
            <a
              href="/cart"
              className="bg-white hover:bg-orange-100 border border-orange-600 text-orange-600 
               px-4 py-2 text-sm 
               md:px-6 md:py-3 md:text-base 
               rounded-lg shadow-lg transition duration-300"
            >
              Custom Orders
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8">
            Explore by Category
          </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {categories.map((cat) => (
    <Link
      key={cat.name}
      to={cat.path}
      className="group relative rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
    >
      {/* Category Image */}
      <img
        src={cat.img}
        alt={cat.name}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://via.placeholder.com/800x600?text=Image+unavailable";
        }}
        className="w-full h-64 object-cover"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <h3 className="text-white text-2xl font-bold">{cat.name}</h3>
      </div>
    </Link>
  ))}
</div>
        </div>
      </section>

    </>
  );
};

export default Home;
