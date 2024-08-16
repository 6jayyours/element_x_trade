import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <div></div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-white text-[20px] transition-all hover:text-white dark:hover:text-white/50"
          />
          
            <div className="flex items-center justify-between">
              <div>
                <p className="flex space-x-3">
                  <span>
                    <span>© </span>
                    <span>2024</span>
                  </span>
                  <span>
                    <span>Element X Trade</span>
                  </span>
                </p>
              </div>
              <div>
                <nav class="space-x-4">
                  <a href="#" class="text-gray-700">
                    Home
                  </a>
                  <a href="#" class="text-gray-700">
                    About
                  </a>
                  <a href="#" class="text-gray-700">
                    Contact
                  </a>
                </nav>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
