"use client";

import { Fade } from "react-awesome-reveal";
import React from "react";
import ProductCard from "./ProductCard";

const productItems = [
  {
    image: "/redchilli.jpg",
    category: "Vegetables",
    name: "Red Chilli",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/bid",
    codepen: "/",
  },
  {
    image: "/blackpepper.jpg",
    category: "Vegetables",
    name: "Black Pepper",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/bid",
    codepen: "/",
  },
  {
    image: "/wheat.jpg",
    category: "Spices",
    name: "Wheat",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/bid",
    codepen: "/",
  },
  {
    image: "/chickpea.jpg",
    category: "Vegetables",
    name: "Chick Pea",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/bid",
    codepen: "/",
  },
  {
    image: "/corn.jpg",
    category: "Vegetables",
    name: "Corn",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/bid",
    codepen: "/",
  },
  {
    image: "/millet.jpg",
    category: "Spices",
    name: "Millet",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/bid",
    codepen: "/",
  },
  {
    image: "/spinach.jpg",
    category: "Vegetables",
    name: "Spinach",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/bid",
    codepen: "/",
  },
  {
    image: "/nuts.jpg",
    category: "Spices",
    name: "Nuts",
    description:
      "Ideal for enhancing dishes with its intense heat and rich aroma.",
    link: "/bid",
    codepen: "/",
  },
];

const Elements = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-8 xl-mb-16 text-center mx-auto">
            Our Products
          </h2>
        </Fade>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
          <Fade
            direction="up"
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {productItems.map((product) => {
              return <ProductCard product={product} />;
            })}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Elements;
