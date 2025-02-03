"use client";

import Main from "@/components/main";
import Nav from "@/components/nav";
import Hls from "hls.js";
import { useEffect, useRef } from "react";

export default function Page() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("/hls/bg.m3u8"); // Reference to the video hosted on Vercel
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_LOADED, () => {
        video?.play();
      });

      // Cleanup the HLS instance when the component unmounts
      return () => {
        hls.destroy();
      };
    } else if (video) {
      // Fallback for browsers that natively support HLS (e.g., Safari)
      video.src = "/hls/bg.m3u8";
      video.play();
    }
  }, []);

  return (
    <div className="relative h-screen w-full">
      <video
        ref={videoRef}
        id="video"
        className=" fixed top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/bg-img.png" // Fallback image before video loads
      >
        Your browser does not support the video tag.
      </video>
      <Nav />
      <Main />
    </div>
  );
}
