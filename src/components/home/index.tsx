"use client";

import { useGlobalState } from "@/state";

import ArrowIcon from "@/lib/assets/icons/arrow.icon";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const { homeRef, active, setActive } = useGlobalState();
  const [animate, setAnimate] = useState<boolean>(false);
  useEffect(() => {
    if (active === "home") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [animate, active]);

  return (
    <section
      id="home"
      ref={homeRef}
      className={`w-full min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden text-gray-100`}
    >
      <div className="flex flex-col md:flex-row h-fit items-center justify-center gap-10 md:gap-20 w-[90%]">
        <div
          className={`${
            animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          } w-full md:max-w-[400px] overflow-hidden transition-all duration-500 font-bold text-center text-[35px] sm:text-[40px] md:text-[60px] capitalize`}
        >
          infinite vision exceptional web design
        </div>
        <div
          className={`${
            animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          } flex transition-all duration-[400ms] delay-100 flex-col items-center overflow-hidden justify-center h-full gap-10`}
        >
          <p className="text-[16px] sm:text-[18px] text-center w-full md:max-w-[400px]">
            Bringing your ideas to life with cutting-edge design, seamless
            functionality, and an immersive user experience. Elevate your online
            presence with innovation and precision.
          </p>
          <button
            className={`${
              animate ? "opacity-100" : "-opacity-0"
            } group flex gap-1 items-center justify-center w-fit rounded-lg transition-all duration-300 bg-gray-100 hover:bg-gray-200 p-2`}
          >
            <span className="text-black text-[16px] md:text-[18px] text-nowrap">
              Explore Our Work
            </span>
            <span className="">
              <ArrowIcon className="size-4 group-hover:translate-x-[1px] group-active:translate-x-[3px]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
