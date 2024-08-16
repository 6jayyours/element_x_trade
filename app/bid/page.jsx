import Form from "@/components/sections/Form";
import React from "react";

const Bid = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24">

          {/** Left content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Contact Us for Product Pricing</h1>
            <p className="subtitle max-w-[400px]">
              Thank you for considering our products. We appreciate your
              interest and look forward to providing you with a competitive
              quote tailored to your needs.
            </p>
          </div>

          {/** Right content */}
          <div className="lg:mt-16">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bid;
