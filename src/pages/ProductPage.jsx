import React, { useState } from 'react';
import data from '../utils/productData';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [products, setProducts] = useState(data);
  const [priceFilter, setPriceFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(8);
  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);

    switch (e.target.value) {
      case 'under10':
        setProducts(data.filter((product) => parseFloat(product.price.replace('£', '')) < 10));
        break;
      case '10to20':
        setProducts(data.filter((product) => parseFloat(product.price.replace('£', '')) >= 10 && parseFloat(product.price.replace('£', '')) <= 20));
        break;
      case 'over20':
        setProducts(data.filter((product) => parseFloat(product.price.replace('£', '')) > 20));
        break;
      default:
        setProducts(data);
        break;
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);

    setProducts(
      data.filter((product) =>
        product.heading.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4); // Increase by 4 products
  };

  const truncateDescription = (description, maxCharacters) => {
    if (description.length <= maxCharacters) {
      return description;
    }
    return description.substr(0, maxCharacters) + '...';
  };


  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 mx-24">
        <div className="mb-4 md:mb-0">
          <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="priceFilter">
            Price Range:
          </label>
          <select
            className="w-full md:w-48 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="priceFilter"
            value={priceFilter}
            onChange={handlePriceFilterChange}
          >
            <option value="">All</option>
            <option value="under10">Under £10</option>
            <option value="10to20">£10 - £20</option>
            <option value="over20">Over £20</option>
          </select>
        </div>
        <div>
          <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="searchQuery">
            Search Products:
          </label>
          <input
            className="w-full md:w-64 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="searchQuery"
            placeholder="Search Products"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 mx-24">
        {products.slice(0, visibleProducts).map((product) => (
            <Link to={`/product/${product.id}`}>
            <div
              key={product.id}
              className="relative rounded-lg overflow-hidden bg-white border shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 h-[400px] cursor-pointer"
            >
              <img
                src={product.image[0]}
                alt={product.heading}
                className="w-full h-[400px] object-cover"
              />
              <div className="opacity-0 absolute inset-0 p-4 bg-gray-800 text-white hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold">{product.heading}</h3>
                <p className="text-lg mt-2">{truncateDescription(product.description, 150)}</p>
                <p className="text-2xl font-bold mt-4">{product.price}</p>
              </div>
            </div>
            </Link>
        ))}
      </div>

      {visibleProducts < products.length && (
        <div className="flex justify-center mt-4 mb-10">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
