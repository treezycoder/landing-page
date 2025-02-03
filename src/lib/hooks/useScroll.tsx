import { useState, useEffect } from "react";

export function useScrollPosition(ref: React.RefObject<HTMLElement | null>) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let lastScrollTop = element.scrollTop;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const position = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPosition(position);

      setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
      lastScrollTop = scrollTop;
    };

    element.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial position

    return () => element.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return { scrollPosition, scrollDirection };
}
