"use client";

import { useGlobalState } from "@/state";
import ArrowIcon from "@/lib/assets/icons/arrow.icon";
import { useEffect, useState } from "react";

const About: React.FC = () => {
  const { aboutRef, active } = useGlobalState();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(active === "about");
  }, [active]);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="w-full min-h-screen overflow-hidden flex items-center justify-center overflow-y-auto bg-transparent text-gray-100"
    >
      <div className="flex h-fit items-center justify-center gap-10 md:gap-20 w-[90%] flex-col md:flex-row-reverse">
        <div
          className={`${
            animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          } w-full md:max-w-[400px] transition-all duration-500 font-bold text-center text-[35px] sm:text-[40px] md:text-[60px] capitalize`}
        >
          About Us
        </div>
        <div
          className={`${
            animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          } flex transition-all duration-[400ms] delay-100 flex-col items-center justify-center h-full gap-10`}
        >
          <p className="ext-[16px] sm:text-[18px] text-center md:max-w-[400px]">
            We are a team of visionary designers and developers dedicated to
            creating exceptional digital experiences. With a focus on
            innovation, functionality, and aesthetics, we transform ideas into
            reality through cutting-edge web design solutions.
          </p>
          <button
            className={`${
              animate ? "opacity-100" : "opacity-0"
            } group flex gap-1 items-center justify-center w-fit rounded-lg transition-all duration-300 bg-gray-100 hover:bg-gray-200 p-2`}
          >
            <span className="text-black text-[16px] md:text-[18px] text-nowrap">
              Learn More
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

export default About;
