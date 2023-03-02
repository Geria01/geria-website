import { useEffect, useState } from "react";

const useViewport = (size) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 100);
    };

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth])

  return {
    isMobile: width < size,
    isDesktop: width > size
  };
}

export default useViewport;
