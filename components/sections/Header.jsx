"use client";

import React from "react";
import ThemeToggler from "../theme/ThemeToggler";

//components
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <Logo />
          <div className="flex items-center gap-x-6 ">
            {/*navigation section */}
            <Nav 
            containerStyles='hidden xl:flex gap-x-8 items-center'

            />

            {/* theme toggle*/}
            <ThemeToggler />

            {/* mobile navigation*/}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
