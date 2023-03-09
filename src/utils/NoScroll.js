import { useEffect } from "react";

const NoScroll = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return null;
};

export default NoScroll;
