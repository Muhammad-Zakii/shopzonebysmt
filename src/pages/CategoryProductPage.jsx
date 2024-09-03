import React, { useState } from 'react';
import data from '../utils/productData';
import { Link, useParams } from 'react-router-dom';

const CategoryProductPage = () => {
  const [priceFilter, setPriceFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { category } = useParams();
  const filteredProducts = data.filter((product) => product.category === category);
  const [displayedProducts, setDisplayedProducts] = useState(8);
  const [products, setProducts] = useState(filteredProducts);


  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);

    switch (e.target.value) {
      case 'under10':
        setProducts(filteredProducts.filter((product) => parseFloat(product.price.replace('£', '')) < 10));
        break;
      case '10to20':
        setProducts(filteredProducts.filter((product) => parseFloat(product.price.replace('£', '')) >= 10 && parseFloat(product.price.replace('£', '')) <= 20));
        break;
      case 'over20':
        setProducts(filteredProducts.filter((product) => parseFloat(product.price.replace('£', '')) > 20));
        break;
      default:
        setProducts(filteredProducts);
        break;
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);

    setProducts(
      filteredProducts.filter((product) =>
        product.heading.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const loadMore = () => {
    // Increment the number of displayed products by 4 when "Load More" is clicked
    setDisplayedProducts(displayedProducts + 4);
  };

  const truncateText = (text, maxCharacters) => {
    if (text.length <= maxCharacters) {
      return text;
    }
    return text.slice(0, maxCharacters) + '...';
  };

  return (
    <div className="container mx-auto mt-8">
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
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

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
      {products.slice(0, displayedProducts).map((product) => (
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
              <p className="text-lg mt-2">{truncateText(product.description, 200)}</p>
              <p className="text-2xl font-bold mt-4">{product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>

    {displayedProducts < products.length && (
      <div className="text-center">
        <button
          onClick={loadMore}
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded mt-4 mb-16"
        >
          Load More
        </button>
      </div>
    )}
  </div>
  );
};

export default CategoryProductPage;
