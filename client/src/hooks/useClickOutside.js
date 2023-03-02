import { useEffect, useRef } from "react";

const useOutsideClick = (callback, isMobile) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target) && isMobile)
        callback();
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [callback, isMobile, ref]);

  return ref;
};

export default useOutsideClick;
