import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import { useContext } from "react";
import CartContext from "../../cart/CartContext";


const Gallery = () => {
  const { categoryName } = useParams();

  const [images, setImages] = useState([]);
  const [displayName, setDisplayName] = useState("");
  const { cartList, addToCart } = useContext(CartContext);

  useEffect(() => {
    const categoryImages = {
  ganesha: [
    { id: "g1", name: "Lord Ganesha", url: "https://i.pinimg.com/originals/a9/70/14/a97014023e454fdd2c147f00884c2e58.jpg" },
    { id: "g2", name: "Lord Ganesha", url: "https://i.pinimg.com/originals/a9/70/14/a97014023e454fdd2c147f00884c2e58.jpg" },
  ],
  krishna: [
    { id: "k1", name: "Lord Krishna", url: "https://nichecanvas.com/cdn/shop/files/1-piece_floating-frame_1_32abce02-9cbc-479f-a1ab-f32b1148b7a0_512x512.jpg?v=1724571202" },
    { id: "k2", name: "Lord Krishna", url: "https://nichecanvas.com/cdn/shop/files/1-piece_floating-frame_1_32abce02-9cbc-479f-a1ab-f32b1148b7a0_512x512.jpg?v=1724571202" },
  ],
  lakshmi: [
    { id: "l1", name: "Goddess Lakshmi", url: "https://images.saatchiart.com/saatchi/1340813/art/9858755/8921701-QOTAHKDE-6.jpg" },
    { id: "l2", name: "Goddess Lakshmi", url: "https://images.saatchiart.com/saatchi/1340813/art/9858755/8921701-QOTAHKDE-6.jpg" },
  ],
  shiva: [
    { id: "s1", name: "Lord Shiva", url: "https://i.etsystatic.com/47044949/c/2005/2005/0/102/il/a1d6af/5861363409/il_600x600.5861363409_hzrl.jpg" },
    { id: "s2", name: "Lord Shiva", url: "https://i.etsystatic.com/47044949/c/2005/2005/0/102/il/a1d6af/5861363409/il_600x600.5861363409_hzrl.jpg"},
  ],
  "ram-hanuman": [
    { id: "rh1", name: "Lord Ram & Lord Hanuman", url: "https://t3.ftcdn.net/jpg/15/63/73/34/360_F_1563733439_tnOeRmhJ0Ya40tEGwSCaXJCLxEsEJamH.jpg" },
    { id: "rh2", name: "Lord Ram & Lord Hanuman", url: "https://t3.ftcdn.net/jpg/15/63/73/34/360_F_1563733439_tnOeRmhJ0Ya40tEGwSCaXJCLxEsEJamH.jpg" },
  ],
};

    const nameMap = {
      ganesha: "Lord Ganesha",
      krishna: "Lord Krishna",
      lakshmi: "Goddess Lakshmi",
      shiva: "Lord Shiva",
      "ram-hanuman": "Lord Ram & Lord Hanuman",
    };

    if (categoryName) {
      setImages(categoryImages[categoryName] || []);
      setDisplayName(nameMap[categoryName] || categoryName);
    } else {
      const allImages = Object.values(categoryImages).flat();
      setImages(allImages);
      setDisplayName("");
    }
  }, [categoryName]);

  

  return (
    <>
      <Header />
      <div className="bg-gray-50 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-600 mb-6">
          🎨{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-extrabold tracking-widest">
            {categoryName
              ? `${displayName.toUpperCase()} GALLERY`
              : "JKARTS GALLERY"}
          </span>
        </h2>
        <p className="text-center px-4 text-xl font-bold md:text-xl text-gray-600 mb-14">
          {categoryName
            ? <>Discover beautiful paintings of <span className="text-orange-600">{displayName}</span></>
            : "Explore the complete collection of divine artworks ✨🙏"}
        </p>

        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
              >
                <img
                  src={img.url}
                  alt={`Artwork ${img.id}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 flex justify-center">
                 <button
  onClick={() => addToCart({ id: img.id, url: img.url, name: displayName })}
  className={`px-4 py-2 rounded-lg text-white font-semibold ${
    cartList.some((cartItem) => cartItem.id === img.id)
      ? "bg-green-500 cursor-default"
      : "bg-orange-500 hover:bg-orange-600"
  }`}
  disabled={cartList.some((cartItem) => cartItem.id === img.id)}
>
  {cartList.some((cartItem) => cartItem.id === img.id)
    ? "Added"
    : "Add to Cart"}
</button>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No images found for this category.
          </p>
        )}
      </div>
    </>
  );
};

export default Gallery;
