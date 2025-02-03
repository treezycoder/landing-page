"use client";

import React, {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type Screens = "home" | "about" | "blog" | "contact";

type GlobalContextType = {
  active: Screens;
  setActive: React.Dispatch<SetStateAction<Screens>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<SetStateAction<number>>;
  homeRef: React.RefObject<HTMLElement | null>;
  aboutRef: React.RefObject<HTMLElement | null>;
  blogRef: React.RefObject<HTMLElement | null>;
  navRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<SetStateAction<boolean>>;
  handleScrollTo: (item: Screens) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [active, setActive] = useState<Screens>("home");
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const blogRef = useRef<HTMLElement>(null);

  const sectionRefs = useMemo(() => {
    return [homeRef, aboutRef, contactRef, blogRef];
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const current = entry.target.id;
            // Ensure `current` is a valid value of type Active
            if (["home", "about", "blog", "contact"].includes(current)) {
              setActive(current as Screens);
            }
          }
        });
      },
      { threshold: 0.5 } // 50% of the section must be visible
    );

    // Observe each section
    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup
    return () => observer.disconnect();
  }, [sectionRefs, active]);

  function handleScrollTo(item: Screens) {
    setActive(item);
    setShowMobileNav(false);
    if (item === "home" && homeRef.current) {
      homeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (item === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (item === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (item === "blog" && blogRef.current) {
      blogRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        active,
        setActive,
        homeRef,
        aboutRef,
        blogRef,
        contactRef,
        navRef,
        activeIndex,
        setActiveIndex,
        showMobileNav,
        setShowMobileNav,
        handleScrollTo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
