import { useState, useEffect } from "react";

const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const scrollHandler = () => handleScroll();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
    /* trunk-ignore(eslint/react-hooks/exhaustive-deps) */
  }, [threshold]);

  return scrolled;
};

export default useScrollTop;
