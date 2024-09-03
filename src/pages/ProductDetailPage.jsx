import React from 'react';
import ImageCarousel from '../components/product/ImageCarousel';
import { useParams } from 'react-router-dom';
import data from '../utils/productData';

const ProductDetailPage = () => {
 const {id} = useParams();

 const selectedProduct = data.find(product => product.id === parseInt(id))

if(!selectedProduct){
    return <div>Product not Found</div>
}

  return (
    <div className="container mx-auto p-4 mt-20 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full lg:w-2/3">
          <ImageCarousel images={selectedProduct.image} />
        </div>
        <div className="w-full">
          <div className="p-4">
            <h1 className="text-3xl font-extrabold mb-2">{selectedProduct.heading}</h1>
            <p className="text-xl text-gray-700 mb-4">{`Price: ${selectedProduct.price}`}</p>
            <h2 className="text-xl font-semibold mb-2">Key Benefits</h2>
            <ul className="list-disc pl-6 mb-4">
              {selectedProduct.keyBenefits?.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold mb-2">Composition</h2>
            <p className="mb-4">{selectedProduct.composition}</p>
            <h2 className="text-xl font-semibold mb-2">Nutritional Information</h2>
            <p className="mb-4">{selectedProduct.nutritionalInfo}</p>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="mb-4">{selectedProduct.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
