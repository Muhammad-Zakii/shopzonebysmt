import React from "react";
import data from "../../utils/productData";
import { Link } from "react-router-dom";

const FeatureProducts = () => {

  // Function to truncate text
  const truncateText = (text, maxLines) => {
    const lines = text.split('\n');
    if (lines.length <= maxLines) {
      return text;
    }
    return lines.slice(0, maxLines).join('\n');
  };

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-10">
          {data.slice(0, 8).map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div
                className="relative rounded-lg overflow-hidden bg-white border shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 h-[400px] cursor-pointer"
              >
                <img
                  src={product.image[0]}
                  alt={product.heading}
                  className="w-full h-[400px] object-cover"
                />
                <div className="opacity-0 absolute inset-0 p-4 bg-gray-800 text-white hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-semibold">{product.heading}</h3>
                  <p className="text-lg mt-2" style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    {truncateText(product.description, 3)}
                  </p>
                  <p className="text-2xl font-bold mt-4">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
