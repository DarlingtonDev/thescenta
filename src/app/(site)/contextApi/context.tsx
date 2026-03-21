"use client";

import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";
interface NavContextType {
  navopen: boolean;
  hasinteracted: boolean;
  toggleNav: () => void;
  scrollPosition: string;
  setScrollPosition: React.Dispatch<SetStateAction<"initial" | "final">>;
}

export const Navcontext = createContext<NavContextType | null>(null);
export const Context = ({ children }: { children: React.ReactNode }) => {
  const [navopen, setnavopen] = useState(false);
  const [hasinteracted, sethasinteracted] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<"initial" | "final">(
    "initial"
  );

  useEffect(() => {
    const body = document.body;
    if (navopen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [navopen]);

  function toggleNav() {
    setnavopen((navopen) => !navopen);
    sethasinteracted(true);
  }
  return (
    <Navcontext.Provider
      value={{
        navopen,
        toggleNav,
        hasinteracted,
        scrollPosition,
        setScrollPosition,
      }}
    >
      {children}
    </Navcontext.Provider>
  );
};
