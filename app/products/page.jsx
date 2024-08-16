"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

import productsData from "@/data/productData";
import ProductCard from "@/components/sections/ProductCard";

const uniqueCategories = [
  "all products",
  ...new Set(productsData.map((item) => item.category)),
];

const Products = () => {
  const [categories, SetCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all products');

  const filteredProducts = productsData.filter((product) => {
    return category === "all products"
      ? product
      : product.category === category;
  });

  return (
    <section className="min-h-screen pt-8">
      <div className="container mx-auto">
        <h2 className="section-title mb-4 xl:mb-8 mx-auto">Products</h2>

        {/** tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[850px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  value={category}
                  key={index}
                  onClick={() => setCategory(category)}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/** tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProductCard product={product} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Products;
