// src/Layout.jsx
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

export default function Layout({ children }) {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    function measure() {
      const h = headerRef.current?.offsetHeight || 0;
      setHeaderHeight(h);
      // set a CSS variable so other components can use it if needed
      document.documentElement.style.setProperty("--site-header-height", `${h}px`);
    }

    measure();
    window.addEventListener("resize", measure);
    // also observe mutations in case header height changes (mobile open/close)
    const obs = new MutationObserver(measure);
    if (headerRef.current) obs.observe(headerRef.current, { childList: true, subtree: true, attributes: true });

    return () => {
      window.removeEventListener("resize", measure);
      obs.disconnect();
    };
  }, []);

  return (
    // full-height flex column ensures footer is pushed to bottom when content is short
    <div className="min-h-screen flex flex-col">
      {/* pass headerRef directly to the Navbar forwarded-ref so we measure the real header element */}
      <Navbar ref={headerRef} />

      {/* main should grow to take available space; paddingTop prevents overlap with fixed header */}
      <main className="flex-1" style={{ paddingTop: headerHeight }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
