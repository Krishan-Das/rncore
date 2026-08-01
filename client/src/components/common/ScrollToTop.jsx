import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // পেজ চেঞ্জ হলেই স্ক্রোল একদম উপরে নিয়ে যাবে
  }, [pathname]);

  return null;
};

export default ScrollToTop;