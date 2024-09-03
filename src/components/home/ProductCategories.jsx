import React from "react";
import { Link } from "react-router-dom";

export const ProductCategories = () => {
  const productCategories = [
    {
      id: 1,
      name: "pets",
      image: "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_640.jpg",
    },
    {
      id: 2,
      name: "Sports&Outdoors",
      image: "https://cdn.pixabay.com/photo/2016/11/29/12/17/action-1869428_960_720.jpg",
    },
    {
      id: 3,
      name: "BabyProducts",
      image: "https://cdn.pixabay.com/photo/2019/04/09/06/45/newborn-4113746_960_720.jpg",
    },
    {
      id: 4,
      name: "beauty",
      image: "https://cdn.pixabay.com/photo/2020/04/02/05/19/beauty-4993472_640.jpg",
    },

    {
      id: 5,
      name: "Toys",
      image: "https://cdn.pixabay.com/photo/2017/06/23/18/50/thomas-and-friends-2435542_1280.jpg",
    },

    {
      id: 6,
      name: "Home&Garden",
      image: "https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579_1280.jpg",
    },

    {
      id: 7,
      name: "Industrial&Scientific",
      image: "https://cdn.pixabay.com/photo/2022/06/20/12/59/hard-hat-7273716_1280.jpg",
    },

    {
      id: 8,
      name: "AutoMotive",
      image: "https://cdn.pixabay.com/photo/2014/06/04/16/36/man-362150_960_720.jpg",
    },
    // Add more categories with random image URLs as needed
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-8">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-10">
          {productCategories.map((category) => (
            <div
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {category.name}
                </h3>
                <Link to={`/product/category/${category.name}`}>
                <div
                  className="text-blue-600 hover:underline hover:text-blue-800 cursor-pointer"
                >
                  Explore {category.name}
                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
