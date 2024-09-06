"use client";

import React, { useEffect, useState } from "react";
import ThemeToggler from "../theme/ThemeToggler";

//components
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";


const Header = () => {

  const [header, setHeader] = useState(false);
  const pathName = usePathname();

  useEffect(() =>{
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    })

    //remove events
    return () => window.removeEventListener('scroll', scrollYPos);
  }, []);

  return (
    <header
    className={`${
      header ?
      'py-4 bg-white shadow-lg dark:bg-accent' :
      'py-6 dark:bg-transparent'
    } sticky top-0 z-30 transition-all ${pathName === '/' && 'bg-[#fff]'}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <Logo />
          
          <div className="flex items-center gap-x-6 ">
            {/*navigation section */}
            <Nav 
            containerStyles='hidden xl:flex gap-x-8 items-center'
            linkStyles='relative hover:text-primary transition-all'
            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'

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
