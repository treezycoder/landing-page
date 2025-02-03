"use client";

import CancelIcon from "@/lib/assets/icons/cancel.icon";
import MenuIcon from "@/lib/assets/icons/menu.icon";
import { Screens, useGlobalState } from "@/state";
import Image from "next/image";

const list = ["home", "about", "blog", "contact"];

const Nav: React.FC = () => {
  const { navRef, handleScrollTo, active, showMobileNav, setShowMobileNav } =
    useGlobalState();

  return (
    <nav
      ref={navRef}
      className="fixed w-full h-[60px] z-20 left-0 top-0  backdrop-blur-sm "
    >
      <div className="flex px-5 w-full h-full z-[1] justify-between">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <ul className="w-fit flex-1 justify-center items-center gap-10 hidden lg:flex">
          {list.map((item, index) => (
            <li
              key={index}
              onClick={() => handleScrollTo(item as Screens)}
              className={`cursor-pointer capitalize py-2 text-[14px] hover:text-white active:scale-100 transition-all duration-300 ${
                active === item ? "text-white" : "text-white/50"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="w-fit h-full flex items-center justify-center lg:hidden">
          <span
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="flex lg:hidden items-center justify-center p-1 hover:bg-white/5 rounded-full cursor-pointer group"
          >
            {showMobileNav ? <CancelIcon /> : <MenuIcon />}
          </span>
        </div>
      </div>
      <div
        style={{ background: "#000", backdropFilter: "blur(10px)" }}
        className={`absolute z-[-1] backdrop-blur-sm  overflow-hidden flex flex-col justify-center items-center w-full transition-all duration-300 ease-in-out top-0 left-0 ${
          showMobileNav ? "h-screen" : "h-0"
        }`}
      >
        <ul
          className={`flex w-full  h-full flex-col items-center justify-center transition-all duration-200 gap-4 ${
            showMobileNav ? "opacity-100" : "opacity-0"
          }`}
        >
          {list.map((item, index) => (
            <li
              key={index}
              onClick={() => handleScrollTo(item as Screens)}
              className={`cursor-pointer w-fit capitalize py-2 text-[30px] hover:text-white active:scale-100 transition-all duration-300 ${
                active === item ? "text-white" : "text-white/50"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <span className="size-10 rounded-full relative">
      <Image
        src="/logo.svg"
        alt="logo"
        layout="fill"
        objectFit="contain"
        className="rounded-full"
      />
    </span>
  );
};

export default Nav;
