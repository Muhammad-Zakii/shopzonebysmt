import React from "react";
import HeroSection from "../components/home/HeroSection";
import { ProductCategories } from "../components/home/ProductCategories";
import FeatureProducts from "../components/home/FeatureProducts";
import AboutSection from "../components/home/AboutSection";
import ContactUs from "../components/home/ContactUs";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProductCategories />
      <FeatureProducts />
      <AboutSection />
      <ContactUs/>
    </>
  );
};
