"use client";

import { useGlobalState } from "@/state";
import ArrowIcon from "@/lib/assets/icons/arrow.icon";
import { useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";

interface UnsplashImage {
  id: string;
  urls: { regular: string };
  alt_description: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Blog: React.FC = () => {
  const { blogRef, active } = useGlobalState();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(active === "blog");
  }, [active]);

  const { data, error } = useSWR(
    "https://api.unsplash.com/photos/random?count=3&client_id=L93F4xAh34SHoyQSXEwDP1TPoSeJ5ZHJrcZA3PNvkNE",
    fetcher
  );

  return (
    <section
      id="blog"
      ref={blogRef}
      className="w-full overflow-hidden min-h-screen flex items-center justify-center bg-transparent text-gray-100"
    >
      <div className="flex h-fit items-center justify-center gap-10 md:gap-20 w-[90%] flex-col">
        <div
          className={`${
            animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          } transition-all duration-500 font-bold text-center text-[35px] sm:text-[40px] md:text-[60px]  capitalize`}
        >
          Our Blog
        </div>
        <div
          className={`${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } transition-all duration-[400ms] delay-100 flex flex-col items-center justify-center h-full gap-10 max-w-[800px] text-center`}
        >
          <p className="text-[16px] sm:text-[18px] text-center w-full md:max-w-[400px]">
            Stay informed with the latest trends, insights, and innovations in
            web design and development. Our blog is your go-to source for expert
            tips, industry updates, and creative inspiration to elevate your
            digital presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[800px]">
            {data && data.length > 0 && !(error instanceof Error)
              ? data.map((image: UnsplashImage) => (
                  <div
                    key={image.id}
                    className="relative w-full h-60 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image.urls.regular}
                      alt={image.alt_description}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                ))
              : "Loading images..."}
            {/* {error && (
              <span className="text-red-500">Failed to load images</span>
            )} */}
          </div>
          <button
            className={`${
              animate ? "opacity-100" : "opacity-0"
            } group flex gap-1 items-center justify-center w-fit rounded-lg transition-all duration-300 bg-gray-100 hover:bg-gray-200 p-2`}
          >
            <span className="text-black text-[16px] md:text-[18px] text-nowrap">
              Read More
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

export default Blog;
