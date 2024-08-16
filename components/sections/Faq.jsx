"use client";

import { Fade } from "react-awesome-reveal";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionHeader } from "@radix-ui/react-accordion";

const Faq = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full pt-12 mb-6 xl:mb24">
          <Fade
            direction="up"
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="section-title mb-12 text-center mx-auto">
              Our Facility
            </h2>
          </Fade>

          <div>
            <Fade
              direction="up"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {/** Accordian */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="mx-3">
                      01. What is the expiery of the product?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="mx-3">
                      02. How long will it take to deliver the products?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="mx-3">
                      03. Who is the founders of Element X trade?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
