import React from "react";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="bg-gray-100 py-16 m-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-800 mb-6 text-shadow-lg">
                About Us
              </h2>
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 text-shadow-md">
                At Shopzonebysmt, we're more than just an online store. We're a
                team of dedicated individuals who are passionate about
                delivering high-quality products and exceptional service to our
                valued customers. Our mission is to provide you with a seamless
                shopping experience, offering a wide range of products to cater
                to your needs. We take pride in our commitment to quality,
                affordability, and customer satisfaction. Explore our
                collections and shop with confidence, knowing that you're in the
                hands of a trusted e-commerce destination.
              </p>
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/02/11/05/cashier-1791106_640.jpg"
                alt="About Us"
                className="w-full h-full object-cover rounded-[30px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
