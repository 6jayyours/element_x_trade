import React from "react";
import ProductCard from "./ProductCard";

const productItems = [
  {
    image: "/redchilli.jpg",
    category: "Vegetables",
    name: "Red Chilli",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/blackpepper.jpg",
    category: "Vegetables",
    name: "Black Pepper",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/wheat.jpg",
    category: "Spices",
    name: "Wheat",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/chickpea.jpg",
    category: "Vegetables",
    name: "Chick Pea",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/corn.jpg",
    category: "Vegetables",
    name: "Corn",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/millet.jpg",
    category: "Spices",
    name: "Millet",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/spinach.jpg",
    category: "Vegetables",
    name: "Spinach",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/nuts.jpg",
    category: "Spices",
    name: "Nuts",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/",
    codepen: "/",
  },
];

const Elements = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl-mb-16 text-center mx-auto">
          Our Products
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
          {productItems.map((product) => {
            return (
              <ProductCard product={product} />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Elements;
